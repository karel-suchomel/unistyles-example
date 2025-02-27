import { StatusBarStyle } from 'expo-status-bar'
import { UnistylesRuntime, UnistylesThemes } from 'react-native-unistyles'

import { Color } from './types'

import { getStringData, StorageKeys, storeData } from '~/services/storage'

export function persistUserTheme(theme: keyof UnistylesThemes) {
  storeData(StorageKeys.Theme, theme)
}

export function getUserTheme() {
  return (getStringData(StorageKeys.Theme) ?? 'light') as keyof UnistylesThemes
}

export function getStatusBarStyle(): StatusBarStyle {
  if (UnistylesRuntime.themeName === 'dark') {
    return 'light'
  }
  return 'dark'
}

export function toggleTheme() {
  if (UnistylesRuntime.themeName === 'dark') {
    UnistylesRuntime.setTheme('light')
    persistUserTheme('light')
  } else {
    UnistylesRuntime.setTheme('dark')
    persistUserTheme('dark')
  }
}

const CONTRASTING_COLORS = ['fillPrimary']

export function isColorContrasting(color: keyof Color) {
  return CONTRASTING_COLORS.includes(color)
}
