import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { AreaGraph } from '../AreaGraph'
import { TimeSwitcher } from '../TimeSwitcher'

import { Card } from '~/components/Card'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function ActivityOverview() {
  const [updateGraph, setUpdateGraph] = useState(true)
  const { t } = useTranslation('features')

  return (
    <View style={[tokens.gap('lg')]}>
      <Text type="h6" weight="semibold" lineHeight="normal">
        {t('dashboard.activityOverview')}
      </Text>
      <Card>
        <TimeSwitcher onTimeSwitch={() => setUpdateGraph((prev) => !prev)} />
        <AreaGraph updateGraph={updateGraph} />
      </Card>
    </View>
  )
}
