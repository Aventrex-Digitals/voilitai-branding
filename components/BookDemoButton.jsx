'use client';

import { useDemo } from '@/components/DemoProvider';

export default function BookDemoButton({
  className = 'btn-primary',
  children = 'Book a demo',
}) {
  const { openDemo } = useDemo();

  return (
    <button type="button" className={className} onClick={openDemo}>
      {children}
    </button>
  );
}
