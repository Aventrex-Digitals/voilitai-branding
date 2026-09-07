'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import DemoModal from '@/components/DemoModal';

const DemoContext = createContext({
  open: false,
  openDemo: () => {},
  closeDemo: () => {},
});

export function DemoProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openDemo = useCallback(() => setOpen(true), []);
  const closeDemo = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function maybeOpen() {
      const params = new URLSearchParams(window.location.search);
      if (window.location.hash === '#book-demo' || params.has('demo')) {
        setOpen(true);
      }
    }
    maybeOpen();
    window.addEventListener('hashchange', maybeOpen);
    return () => window.removeEventListener('hashchange', maybeOpen);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const value = useMemo(() => ({ open, openDemo, closeDemo }), [open, openDemo, closeDemo]);

  return (
    <DemoContext.Provider value={value}>
      {children}
      <DemoModal />
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}
