import BookDemoButton from '@/components/BookDemoButton';

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 lg:hidden">
      <BookDemoButton className="btn-primary flex w-full shadow-[0_12px_32px_rgba(139,53,232,0.28)]" />
    </div>
  );
}
