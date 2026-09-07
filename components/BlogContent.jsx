import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DOMPurify from 'isomorphic-dompurify';

function looksLikeHtml(content) {
  const trimmed = content.trim();
  return /^<[a-z!/?]/i.test(trimmed) && /<\/[a-z][\w-]*\s*>/i.test(trimmed);
}

function MarkdownLink({ href, children }) {
  const external = typeof href === 'string' && /^https?:\/\//i.test(href);
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  );
}

/**
 * Renders Aventrex blog body as markdown or sanitized HTML.
 */
export default function BlogContent({ content }) {
  if (!content?.trim()) return null;

  if (looksLikeHtml(content)) {
    const html = DOMPurify.sanitize(content, {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input'],
    });
    return <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <div className="article-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
