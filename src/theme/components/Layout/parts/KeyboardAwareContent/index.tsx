import { memo } from 'react'
import {
  KeyboardAwareScrollView,
  type KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-controller'

import { styles } from '../styles'

export const KeyboardAwareContent = memo(function KeyboardAwareContent({
  style,
  contentContainerStyle,
  ...props
}: KeyboardAwareScrollViewProps) {
  return (
    <KeyboardAwareScrollView
      style={[styles.content, style]}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
      {...props}
    />
  )
})
