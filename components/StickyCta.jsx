import BookDemoButton from '@/components/BookDemoButton';
import { APP_GET_STARTED } from '@/lib/site';

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 p-3 lg:hidden">
      <a
        href={APP_GET_STARTED}
        className="btn-primary flex flex-1 items-center justify-center shadow-[0_12px_32px_rgba(139,53,232,0.28)]"
      >
        Create Your AI Employee
      </a>
      <BookDemoButton className="btn-secondary flex flex-1 items-center justify-center">
        Live Demo
      </BookDemoButton>
    </div>
  );
}
