import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Gauge } from '../Gauge'

import { Card } from '~/components/Card'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function Progress() {
  const { t } = useTranslation('features')

  return (
    <Card style={[tokens.flex_row, tokens.justify_between, tokens.align_center]}>
      <View style={tokens.gap('_2sm')}>
        <Text type="h6" weight="semibold">
          {t('dashboard.progress')}
        </Text>
        <Text type="p2" color="textSecondary">
          {t('dashboard.numbOfTasks', { count: 10 })}
        </Text>
      </View>
      <Gauge />
    </Card>
  )
}
