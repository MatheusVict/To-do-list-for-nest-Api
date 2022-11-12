import { ThemeProvider } from "styled-components";

import React from 'react';

interface ThemesProps {
  children: React.ReactNode;
}

const fontSizes: any = [14, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const primary = '#2567b4';
const secondary = '#f9B531'

const theme = {
  fontSizes,
  colors: {
    primary,
    secondary,
  }
};

const Theme: React.FC<ThemesProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
};

export default Theme;