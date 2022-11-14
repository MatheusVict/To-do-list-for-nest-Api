import { ThemeProvider } from "styled-components";

import React from 'react';

interface ThemesProps {
  children: React.ReactNode;
}

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1]
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#2567b4';
const secondary = '#f9B531'

const theme = {
  fontSizes,
  colors: {
    primary,
    secondary,
  }
};

export type ThemeType = typeof theme;

const Theme: React.FC<ThemesProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
};

export default Theme;