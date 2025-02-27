import { type StyleProp, type TextStyle } from 'react-native'

import { type ButtonProps, ButtonWrapper } from '../ButtonWrapper'
import { Spinner } from '../Spinner'
import { Text } from '../Text'
import { type StyledTextProps } from '../Text/styles'

type Props = {
  text: string
  isLoading?: boolean
  style?: StyleProp<TextStyle>
} & StyledTextProps &
  Omit<ButtonProps, 'children' | 'style'>

export function Link({
  isLoading,
  fontStyle,
  lineHeight,
  type = 'c1',
  weight,
  text,
  style,
  ...rest
}: Props) {
  if (isLoading) {
    return <Spinner size={20} />
  }
  return (
    <ButtonWrapper {...rest}>
      <Text type={type} weight={weight} lineHeight={lineHeight} fontStyle={fontStyle} style={style}>
        {text}
      </Text>
    </ButtonWrapper>
  )
}
