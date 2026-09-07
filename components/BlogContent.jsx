import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DOMPurify from 'isomorphic-dompurify';
import { injectHtmlHeadingIds } from '@/lib/blog-toc';

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
export default function BlogContent({ content, toc = [] }) {
  if (!content?.trim()) return null;

  if (looksLikeHtml(content)) {
    const withIds = injectHtmlHeadingIds(content, toc);
    const html = DOMPurify.sanitize(withIds, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ['id'],
      FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input'],
    });
    return <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  let headingIndex = 0;
  const takeId = () => toc[headingIndex++]?.id;

  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: MarkdownLink,
          h2: ({ children }) => <h2 id={takeId()}>{children}</h2>,
          h3: ({ children }) => <h3 id={takeId()}>{children}</h3>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
