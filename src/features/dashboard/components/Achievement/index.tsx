import { View } from 'react-native'

import { type Achievement as AchievementType } from '../../types'

import { Card } from '~/components/Card'
import { Icon } from '~/features/icons/components/Icon'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function Achievement({ title, icon, count, unit }: AchievementType) {
  return (
    <Card style={[tokens.gap('md'), tokens.justify_between, tokens.flex_1, tokens.min_w(140)]}>
      <View
        style={[tokens.flex_row, tokens.align_center, tokens.justify_between, tokens.gap('sm')]}
      >
        <Text type="p2" weight="semibold" style={[tokens.max_w('70%'), { wordWrap: 'break-word' }]}>
          {title}
        </Text>
        {icon && <Icon name={icon} size={20} />}
      </View>
      <View style={[tokens.flex_row, tokens.align_end, tokens.gap('_2xs')]}>
        <Text type="h4" weight="semibold">
          {count}
        </Text>
        <Text type="c1" color="textSecondary" lineHeight="relaxed">
          {unit}
        </Text>
      </View>
    </Card>
  )
}
