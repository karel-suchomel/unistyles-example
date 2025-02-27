import { type ListRenderItem } from 'react-native'

import { Habit, type HabitType } from '../../components/Habit'
import { HabitsProgress } from '../../components/HabitsProgress'

import { Layout } from '~/theme/components/Layout'
import { VirtualizedContent } from '~/theme/components/Layout/parts/VirtualizedContent'
import { tokens } from '~/theme/tokens'

const habits: HabitType[] = [
  {
    id: 0,
    icon: 'meditate',
    line1: 'drink water',
    line2: '9',
    line3: '/ 10 glasses',
    color: 'blue',
  },
  {
    id: 1,
    icon: 'meditate',
    line1: 'meditate',
    line2: '30 min',
    color: 'green',
  },
  {
    id: 2,
    icon: 'meditate',
    line1: 'exercise',
    line2: '60 min',
    color: 'purple',
  },
  {
    id: 3,
    icon: 'meditate',
    line1: 'walk',
    line2: '10000',
    line3: 'steps',
    color: 'yellow',
  },
  {
    id: 4,
    icon: 'meditate',
    line1: 'no ciggy',
    line2: '21 days',
    line4: 'streak',
  },
  {
    id: 5,
    icon: 'meditate',
    line1: 'no ciggy',
    line2: '21 days',
    line4: 'streak',
  },
]

const renderItem: ListRenderItem<HabitType> = ({ item }) => {
  return <Habit {...item} />
}

const keyExtractor = (item: HabitType) => item.id.toString()

export function Habits() {
  return (
    <Layout>
      <VirtualizedContent
        ListHeaderComponent={<HabitsProgress style={[tokens.pb('_3xl')]} />}
        contentContainerStyle={[
          tokens.gap('md'),
          tokens.pt('xl'),
          tokens.flex_grow,
          tokens.px('_2xl'),
        ]}
        data={habits}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Layout>
  )
}
