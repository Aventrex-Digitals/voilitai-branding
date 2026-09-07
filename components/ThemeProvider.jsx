'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = window.localStorage.getItem('voilitai-appearance');
    const next = stored === 'light' || stored === 'dark' ? stored : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggle: () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        window.localStorage.setItem('voilitai-appearance', next);
        document.documentElement.classList.toggle('dark', next === 'dark');
      },
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
