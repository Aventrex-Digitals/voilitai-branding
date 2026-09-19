'use client';

import { useDemo } from '@/components/DemoProvider';

export default function BookDemoButton({
  className = 'btn-primary',
  children = 'Talk to a Live Demo',
}) {
  const { openDemo } = useDemo();

  return (
    <button type="button" className={className} onClick={openDemo}>
      {children}
    </button>
  );
}
