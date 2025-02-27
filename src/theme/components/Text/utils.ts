import { StyleProp, TextStyle } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import { tokens } from '~/theme/tokens'

export const calculateLineHeight = (
  styles: StyleProp<TextStyle>,
  { fontScale }: { fontScale: number },
) => {
  let lineHeight
  // should always be defined on these components
  if (styles) {
    const flattened = StyleSheet.flatten(styles)

    flattened.fontSize = (flattened.fontSize ?? tokens.text_p1.fontSize) * fontScale

    if (flattened?.lineHeight) {
      if (flattened.lineHeight !== 0 && flattened.lineHeight <= 2) {
        lineHeight = Math.round(flattened.fontSize * flattened.lineHeight)
      }
    }
  }
  return lineHeight
}
