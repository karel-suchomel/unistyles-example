import { StyleSheet } from 'react-native-unistyles'

import { gray, violet } from './colors'
import { getUserTheme } from './utils'

/**
 * @Colors
 */

const sharedPalette = {
  success: '#66BB6A',
  info: '#29B6F6',
  warning: '#FFA726',
  error: '#F44336',
  transparent: 'transparent',
  lightPurple: '#DCD7F4',
  purple: '#C1BBE0',
  blue: '#BEDEF0',
  green: '#DDEDEC',
  yellow: '#FBEBCC',
  orange: '#FED3B4',
  red: '#FCB9C2',
  pink: '#FEA1AC',
  lightPink: '#FCF2F3',
}

const lightPalette = {
  backgroundPrimary: gray.light[100],
  backgroundSecondary: gray.light[50],
  borderPrimary: gray.light[400],
  borderSecondary: gray.light[200],
  textPrimary: gray.light[900],
  textPrimaryInverted: gray.light[50],
  textSecondary: gray.light[600],
  textTertiary: gray.light[800],
  textQuaternary: gray.light[500],
  textDisabled: gray.light[400],
  iconPrimary: gray.light[700],
  iconSecondary: gray.light[500],
  fillPrimary: gray.light[900],
  fillPrimaryPressed: gray.light[700],
  fillPrimaryDisabled: gray.light[400],
  fillSecondary: gray.light[200],
  contrastPrimary: violet.light[500],
  contrastSecondary: violet.light[300],
  ...sharedPalette,
}

const darkPalette = {
  backgroundPrimary: gray.dark[100],
  backgroundSecondary: gray.dark[50],
  borderPrimary: gray.dark[400],
  borderSecondary: gray.dark[200],
  textPrimary: gray.dark[900],
  textPrimaryInverted: gray.dark[50],
  textSecondary: gray.dark[400],
  textTertiary: gray.dark[200],
  textQuaternary: gray.dark[500],
  textDisabled: gray.dark[400],
  iconPrimary: gray.dark[700],
  iconSecondary: gray.dark[400],
  fillPrimary: gray.dark[900],
  fillPrimaryPressed: gray.dark[700],
  fillPrimaryDisabled: gray.dark[400],
  fillSecondary: gray.dark[200],
  contrastPrimary: violet.dark[500],
  contrastSecondary: violet.dark[300],
  ...sharedPalette,
}

/**
 * @Theme
 */

export const sharedTheme = {
  spacing: {
    _3xs: 2,
    _2xs: 4,
    xs: 6,
    _2sm: 8,
    sm: 10,
    md: 12,
    _2md: 14,
    lg: 16,
    xl: 20,
    _2xl: 24,
    _3xl: 32,
    _4xl: 40,
    _5xl: 48,
    _6xl: 60,
  },
  fonts: {
    primary: 'HelveticaNeueRoman',
    primarySemibold: 'HelveticaNeueMedium',
    primaryBold: 'HelveticaNeueBold',
    primaryItalic: 'HelveticaNeueItalic',
    secondary: 'Outfit',
  },
  fontWeight: {
    regular: '400',
    semibold: '600',
    bold: '700',
  } as const,
  lineHeight: {
    none: 1,
    normal: 1.2,
    relaxed: 1.625,
  } as const,
  borderRadius: {
    none: 0,
    _2sm: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
}

const lightTheme = {
  colors: lightPalette,
  ...sharedTheme,
}

const darkTheme = {
  colors: darkPalette,
  ...sharedTheme,
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

/**
 * @Settings
 */

const settings = {
  initialTheme: getUserTheme,
}

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
}

type AppThemes = typeof themes
type AppBreakpoints = typeof breakpoints

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings,
  themes,
  breakpoints,
})
