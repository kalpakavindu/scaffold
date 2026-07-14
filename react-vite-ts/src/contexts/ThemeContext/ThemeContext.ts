import { createContext, useContext } from 'react';

export type RGBColor = `${number}, ${number}, ${number}`;
export type ThemeMode = 'light' | 'dark';
export interface ColorPallette {
  primary: RGBColor;
  secondary: RGBColor;
  accent: RGBColor;
  onPrimary: RGBColor;
  onSecondary: RGBColor;
  onAccent: RGBColor;
  background: RGBColor;
  onBackground: RGBColor;
  info: RGBColor;
  onInfo: RGBColor;
  success: RGBColor;
  onSuccess: RGBColor;
  warning: RGBColor;
  onWarning: RGBColor;
  danger: RGBColor;
  onDanger: RGBColor;
  [key: string]: RGBColor;
}

export interface ThemeConfig {
  light: ColorPallette;
  dark: ColorPallette;
}

export interface ThemeContextHelpers {
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

export interface ThemeContextProps {
  config: ThemeConfig;
  activeMode: ThemeMode;
  helpers: ThemeContextHelpers;
}

/**
 * Convert a hex color to RGB
 * @param hex - The hex color code with the `#`
 * @returns The RGB color code
 */
export function hexToRGB(hex: string): RGBColor {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!res) throw new Error(`Invalid hex color: ${hex}`);

  const r = parseInt(res[1], 16);
  const g = parseInt(res[2], 16);
  const b = parseInt(res[3], 16);

  return `${r}, ${g}, ${b}`;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function useTheme(): {
  mode: ThemeMode;
  setMode: ThemeContextProps['helpers']['setMode'];
  toggleMode: ThemeContextProps['helpers']['toggleMode'];
} {
  const ctx = useContext<ThemeContextProps | null>(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');

  return {
    mode: ctx.activeMode,
    setMode: ctx.helpers.setMode,
    toggleMode: ctx.helpers.toggleMode,
  };
}
