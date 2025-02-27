import { useRouter } from 'expo-router'
import { View } from 'react-native'

import { styles } from './styles'

import { Icon } from '~/features/icons/components/Icon'
import { IconName } from '~/features/icons/types'
import { ButtonWrapper } from '~/theme/components/ButtonWrapper'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'
import { Color } from '~/theme/types'
import { isColorContrasting } from '~/theme/utils'

export type HabitType = {
  id: number
  icon?: IconName
  line1: string
  line2: string
  line3?: string
  line4?: string
  color?: keyof Color
}

export function Habit({ id, icon, line1, line2, line3, line4, color = 'fillPrimary' }: HabitType) {
  const isContrasting = isColorContrasting(color)
  const router = useRouter()

  const onPress = () => {
    router.push({
      pathname: '/[id]',
      params: { id, color },
    })
  }

  return (
    <ButtonWrapper onPress={onPress}>
      <View style={[styles.container, tokens.bg(color), tokens.gap('_2sm')]}>
        <View style={[tokens.flex_row, tokens.align_center, tokens.gap('_2sm')]}>
          {icon && (
            <Icon name={icon} color={isContrasting ? 'textPrimaryInverted' : 'textTertiary'} />
          )}
          <Text type="p1" color={isContrasting ? 'textPrimaryInverted' : 'textTertiary'}>
            {line1}
          </Text>
        </View>
        <View style={[tokens.self_end, tokens.flex_row, tokens.gap('_2xs'), tokens.align_end]}>
          {line4 && (
            <Text type="c1" color="textSecondary" lineHeight="relaxed">
              {line4}
            </Text>
          )}
          <Text
            type="h4"
            color={isContrasting ? 'textPrimaryInverted' : 'textTertiary'}
            lineHeight="normal"
          >
            {line2}
          </Text>
          {line3 && (
            <Text type="h4" color="textSecondary" lineHeight="normal">
              {line3}
            </Text>
          )}
        </View>
      </View>
    </ButtonWrapper>
  )
}
