import { View } from 'react-native'

import { AchievementList } from '../../components/AchievementList'
import { ActivityOverview } from '../../components/ActivityOverview'
import { Progress } from '../../components/Progress'

import { Layout } from '~/theme/components/Layout'
import { Content } from '~/theme/components/Layout/parts/Content'
import { tokens } from '~/theme/tokens'

export function Dashboard() {
  return (
    <Layout>
      <Content contentContainerStyle={[tokens.pt('xl'), tokens.flex_grow, tokens.gap('xl')]}>
        <View style={tokens.px('_2xl')}>
          <Progress />
        </View>
        <View>
          <AchievementList />
        </View>
        <View style={tokens.px('_2xl')}>
          <ActivityOverview />
        </View>
      </Content>
    </Layout>
  )
}
