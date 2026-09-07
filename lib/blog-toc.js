function looksLikeHtml(content) {
  const trimmed = content.trim();
  return /^<[a-z!/?]/i.test(trimmed) && /<\/[a-z][\w-]*\s*>/i.test(trimmed);
}

function stripTags(value) {
  return String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function stripMd(value) {
  return String(value)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function slugifyHeading(text) {
  const slug = String(text)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return slug || 'section';
}

function createHeadingIdFactory() {
  const seen = new Map();
  return (text) => {
    const base = slugifyHeading(text);
    const count = (seen.get(base) || 0) + 1;
    seen.set(base, count);
    return count > 1 ? `${base}-${count}` : base;
  };
}

export function extractBlogToc(content) {
  if (!content?.trim()) return [];
  const idFor = createHeadingIdFactory();
  const toc = [];

  if (looksLikeHtml(content)) {
    const re = /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi;
    let match;
    while ((match = re.exec(content))) {
      const label = stripTags(match[3]);
      if (!label) continue;
      const existing = /\sid=["']([^"']+)["']/i.exec(match[2] || '');
      toc.push({
        id: existing?.[1] || idFor(label),
        label,
        level: Number(match[1]),
      });
    }
    return toc;
  }

  const re = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = re.exec(content))) {
    const label = stripMd(match[2]);
    if (!label) continue;
    toc.push({
      id: idFor(label),
      label,
      level: match[1].length,
    });
  }
  return toc;
}

export function injectHtmlHeadingIds(html, toc) {
  if (!html || !toc.length) return html;
  let index = 0;
  return html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (full, level, attrs, inner) => {
    const item = toc[index++];
    if (!item?.id) return full;
    const cleaned = String(attrs || '').replace(/\s*id=["'][^"']*["']/gi, '');
    return `<h${level}${cleaned} id="${item.id}">${inner}</h${level}>`;
  });
}
