import BookDemoButton from '@/components/BookDemoButton';
import { APP_GET_STARTED } from '@/lib/site';

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 lg:hidden">
      <a
        href={APP_GET_STARTED}
        className="btn-primary flex min-w-0 flex-1 items-center justify-center px-2.5 py-2.5 text-[0.75rem] leading-tight shadow-[0_12px_32px_rgba(139,53,232,0.28)] sm:px-3 sm:text-[0.8125rem]"
      >
        Create Employee
      </a>
      <BookDemoButton className="btn-secondary flex min-w-0 flex-1 items-center justify-center px-2.5 py-2.5 text-[0.75rem] leading-tight sm:px-3 sm:text-[0.8125rem]">
        Talk to Team
      </BookDemoButton>
    </div>
  );
}
