import { StyleSheet, UnistylesVariants } from 'react-native-unistyles'

import { Color } from '~/theme/types'

export const styles = StyleSheet.create((theme) => ({
  text: {
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.textPrimary,
    variants: {
      type: {
        h1: {
          fontSize: 61,
          fontFamily: theme.fonts.secondary,
        },
        h2: {
          fontSize: 47,
          fontFamily: theme.fonts.secondary,
        },
        h3: {
          fontSize: 36,
          fontFamily: theme.fonts.secondary,
        },
        h4: {
          fontSize: 27,
          fontFamily: theme.fonts.secondary,
        },
        h5: {
          fontSize: 21,
          fontFamily: theme.fonts.secondary,
        },
        h6: {
          fontSize: 18,
          fontFamily: theme.fonts.secondary,
        },
        p1: {
          fontSize: 16,
        },
        p2: {
          fontSize: 14,
        },
        c1: {
          fontSize: 12,
        },
        c2: {
          fontSize: 9,
        },
      },
      weight: {
        regular: {
          fontWeight: theme.fontWeight.regular,
        },
        semibold: {
          fontWeight: theme.fontWeight.semibold,
        },
        bold: {
          fontWeight: theme.fontWeight.bold,
        },
      },
      fontStyle: {
        normal: {
          fontStyle: 'normal',
        },
        italic: {
          fontStyle: 'italic',
        },
      },
      lineHeight: {
        none: {
          lineHeight: theme.lineHeight.none,
        },
        normal: {
          lineHeight: theme.lineHeight.normal,
        },
        relaxed: {
          lineHeight: theme.lineHeight.relaxed,
        },
      },
    },
    compoundVariants: [
      {
        type: 'p1',
        weight: 'semibold',
        styles: {
          fontFamily: theme.fonts.primarySemibold,
        },
      },
      {
        type: 'p1',
        weight: 'bold',
        styles: {
          fontFamily: theme.fonts.primaryBold,
        },
      },
      {
        type: 'p1',
        fontStyle: 'italic',
        styles: {
          fontFamily: theme.fonts.primaryItalic,
        },
      },
      {
        type: 'p2',
        weight: 'semibold',
        styles: {
          fontFamily: theme.fonts.primarySemibold,
        },
      },
      {
        type: 'p2',
        weight: 'bold',
        styles: {
          fontFamily: theme.fonts.primaryBold,
        },
      },
      {
        type: 'p2',
        fontStyle: 'italic',
        styles: {
          fontFamily: theme.fonts.primaryItalic,
        },
      },
      {
        type: 'c1',
        weight: 'semibold',
        styles: {
          fontFamily: theme.fonts.primarySemibold,
        },
      },
      {
        type: 'c1',
        weight: 'bold',
        styles: {
          fontFamily: theme.fonts.primaryBold,
        },
      },
      {
        type: 'c1',
        fontStyle: 'italic',
        styles: {
          fontFamily: theme.fonts.primaryItalic,
        },
      },
      {
        type: 'c2',
        weight: 'semibold',
        styles: {
          fontFamily: theme.fonts.primarySemibold,
        },
      },
      {
        type: 'c2',
        weight: 'bold',
        styles: {
          fontFamily: theme.fonts.primaryBold,
        },
      },
      {
        type: 'c2',
        fontStyle: 'italic',
        styles: {
          fontFamily: theme.fonts.primaryItalic,
        },
      },
    ],
  },
  color: (value: keyof Color) => ({
    color: theme.colors[value],
  }),
}))

export type StyledTextProps = UnistylesVariants<typeof styles>
