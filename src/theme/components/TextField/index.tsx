import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { withUnistyles } from 'react-native-unistyles'
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types'

import { styles } from './styles'
import { ButtonWrapper } from '../ButtonWrapper'
import { AnimatedText, Text } from '../Text'

import { Icon } from '~/features/icons/components/Icon'
import { tokens } from '~/theme/tokens'

const AnimatedUniInput = Animated.createAnimatedComponent(TextInput)

type Props = TextInputProps & {
  hasError?: boolean
  errorMessage?: string
  label?: string
  disabled?: boolean
  renderRightComponent?: (props: { color: string }) => React.ReactNode
  renderLeftComponent?: (props: { color: string }) => React.ReactNode
  containerStyle?: StyleProp<ViewStyle>
  isPassword?: boolean
  theme: UnistylesTheme
}

const UniField = forwardRef<TextInput, Props>((props: Props, ref) => {
  const {
    onFocus,
    onBlur,
    hasError: hasErrorProp,
    label,
    disabled = false,
    renderRightComponent,
    renderLeftComponent,
    errorMessage,
    containerStyle,
    placeholder,
    isPassword,
    textContentType,
    theme,
  } = props

  const hasError = hasErrorProp ?? Boolean(errorMessage)

  styles.useVariants({
    hasError,
  })

  const focused = useSharedValue(0)
  const inputRef = useRef<TextInput>(null)
  const [rightBoxWidth, setRightBoxWidth] = useState(0)
  const [leftBoxWidth, setLeftBoxWidth] = useState(0)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const rStyle = useAnimatedStyle(() => {
    return {
      borderColor: hasError
        ? theme.colors.error
        : interpolateColor(
            focused.value,
            [0, 1],
            [theme.colors.borderPrimary, theme.colors.fillPrimary],
          ),
    }
  }, [hasError, theme.colors])

  const rStyleText = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        focused.value,
        [0, 1],
        [theme.colors.borderPrimary, theme.colors.fillPrimary],
      ),
    }
  }, [theme.colors])

  useImperativeHandle(ref, () => inputRef.current!, [])

  const onFocusWrapper = useCallback<NonNullable<TextInputProps['onFocus']>>(
    (event) => {
      focused.value = withTiming(1, { duration: 200, easing: Easing.out(Easing.ease) })
      onFocus?.(event)
    },
    [focused, onFocus],
  )

  const onBlurWrapper = useCallback<NonNullable<TextInputProps['onBlur']>>(
    (event) => {
      focused.value = withTiming(0, { duration: 200, easing: Easing.out(Easing.ease) })
      onBlur?.(event)
    },
    [focused, onBlur],
  )

  const onShowPasswordPress = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {Boolean(label) && (
        <AnimatedText type="p2" style={rStyleText}>
          {label}
        </AnimatedText>
      )}
      <View>
        <View
          style={[styles.leftBox, renderRightComponent && tokens.p('md')]}
          onLayout={(event) => {
            setLeftBoxWidth(event.nativeEvent.layout.width)
          }}
        >
          {renderLeftComponent?.({
            color: disabled ? theme.colors.iconSecondary : theme.colors.iconPrimary,
          })}
        </View>
        <AnimatedUniInput
          editable={!disabled}
          placeholder={placeholder}
          ref={inputRef}
          style={[
            rStyle,
            styles.input,
            {
              ...(rightBoxWidth && { paddingRight: rightBoxWidth }),
              ...(leftBoxWidth && { paddingLeft: leftBoxWidth }),
            },
          ]}
          onFocus={onFocusWrapper}
          onBlur={onBlurWrapper}
          textContentType={isPassword ? 'password' : textContentType}
          secureTextEntry={isPassword && !isPasswordVisible}
          accessibilityRole="text"
          accessibilityLabel={label ?? placeholder}
          accessibilityState={{
            disabled,
          }}
          {...props}
        />
        <View
          style={[
            styles.rightBox,
            (hasError || renderRightComponent || isPassword) && tokens.p('md'),
          ]}
          onLayout={(event) => {
            setRightBoxWidth(event.nativeEvent.layout.width)
          }}
        >
          {hasError && <Icon name="error-circle" />}
          {renderRightComponent?.({
            color: disabled ? theme.colors.iconSecondary : theme.colors.iconPrimary,
          })}
          {isPassword && (
            <ButtonWrapper hitSlop={5} onPress={onShowPasswordPress}>
              <Icon name={isPasswordVisible ? 'visibility-off' : 'visibility'} />
            </ButtonWrapper>
          )}
        </View>
      </View>
      {errorMessage && (
        <Text type="p2" selectable style={styles.text}>
          {errorMessage}
        </Text>
      )}
    </View>
  )
})

export const TextField = withUnistyles(UniField, (theme) => ({
  theme,
  selectionColor: theme.colors.fillPrimary,
  placeholderTextColor: theme.colors.textQuaternary,
}))
