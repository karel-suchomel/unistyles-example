import { ScrollView, View } from 'react-native'

import { type Achievement as AchievementType } from '../../types'
import { Achievement } from '../Achievement'

import { tokens } from '~/theme/tokens'

const data: AchievementType[] = [
  {
    id: 0,
    title: 'Best streak',
    count: 12,
    unit: 'days',
    icon: 'fire',
  },
  {
    id: 1,
    title: 'Completed today',
    count: 20,
    unit: 'tasks',
  },
  {
    id: 2,
    title: 'Completion rate',
    count: 85,
    unit: '%',
  },
]

export function AchievementList() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[tokens.px('_2xl')]}
    >
      <View style={[tokens.flex_row, tokens.flex_1, tokens.gap('md')]}>
        {data.map((item) => (
          <Achievement key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  )
}
