import { useTranslation } from 'react-i18next'
import { View, type ViewProps } from 'react-native'

import { ProgressBar } from '~/components/ProgressBar'
import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

export function HabitsProgress({ style, ...props }: ViewProps) {
  const { t } = useTranslation('features')

  return (
    <View style={[tokens.gap('_2sm'), style]} {...props}>
      <View style={tokens.gap('_2sm')}>
        <View
          style={[tokens.flex_row, tokens.justify_between, tokens.align_center, tokens.gap('_2sm')]}
        >
          <Text type="h5" weight="semibold">
            {t('habits.progress')}
          </Text>
          <Text type="h5" weight="semibold">
            40%
          </Text>
        </View>
        <ProgressBar progress={40} />
      </View>
      <Text type="p1" color="textSecondary" fontStyle="italic">
        {t('habits.numbOfTasks', { count: 40, done: 16 })}
      </Text>
    </View>
  )
}
