import { useCallback, useEffect, type ReactNode } from 'react';

import { useLocalStorage } from '@/hooks';

import type { ThemeConfig, ThemeMode } from './ThemeContext';
import { ThemeContext, hexToRGB } from './ThemeContext';

export interface ThemeProviderProps {
  config?: ThemeConfig;
  initialMode?: ThemeMode;
  children: ReactNode;
}

const defaultConfig: ThemeConfig = {
  light: {
    background: hexToRGB('#ffffff'),
    onBackground: hexToRGB('#000000'),

    primary: hexToRGB('#000000'),
    onPrimary: hexToRGB('#ffffff'),
    secondary: hexToRGB('#d3d3d3'),
    onSecondary: hexToRGB('#000000'),
    accent: hexToRGB('#424242'),
    onAccent: hexToRGB('#ffffff'),

    danger: hexToRGB('#fb2c36'),
    onDanger: hexToRGB('#000000'),
    success: hexToRGB('#00c950'),
    onSuccess: hexToRGB('#000000'),
    info: hexToRGB('#2b7fff'),
    onInfo: hexToRGB('#000000'),
    warning: hexToRGB('#fe9a00'),
    onWarning: hexToRGB('#000000'),
  },
  dark: {
    background: hexToRGB('#000000'),
    onBackground: hexToRGB('#ffffff'),

    primary: hexToRGB('#f5f5f5'),
    onPrimary: hexToRGB('#000000'),
    secondary: hexToRGB('#2b2b2b'),
    onSecondary: hexToRGB('#ffffff'),
    accent: hexToRGB('#424242'),
    onAccent: hexToRGB('#000000'),

    danger: hexToRGB('#ff6467'),
    onDanger: hexToRGB('#000000'),
    success: hexToRGB('#06df72'),
    onSuccess: hexToRGB('#000000'),
    info: hexToRGB('#51a2ff'),
    onInfo: hexToRGB('#000000'),
    warning: hexToRGB('#ffb900'),
    onWarning: hexToRGB('#000000'),
  },
};

function ThemeProvider({ config = defaultConfig, initialMode = 'light', children }: Readonly<ThemeProviderProps>) {
  const [activeMode, setActiveMode] = useLocalStorage<ThemeMode>(
    'themeMode',
    (document.documentElement.getAttribute('data-theme') as ThemeMode) || initialMode,
  );

  useEffect(() => {
    async function initializeTheme(): Promise<void> {
      // Update css variables
      Object.entries(config[activeMode]).forEach(([k, v]) => {
        const cssVarName: string = `--color-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        document.documentElement.style.setProperty(cssVarName, v);
      });

      document.documentElement.setAttribute('data-theme', activeMode);
    }

    initializeTheme();
  }, [activeMode, config]);

  const toggleMode = useCallback(() => {
    setActiveMode(activeMode === 'light' ? 'dark' : 'light');
  }, [activeMode, setActiveMode]);

  const setMode = useCallback(
    (mode: ThemeMode) => {
      setActiveMode(mode);
    },
    [setActiveMode],
  );

  return (
    <ThemeContext.Provider value={{ config, activeMode, helpers: { setMode, toggleMode } }}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
