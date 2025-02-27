import { useMemo } from 'react'
import { View } from 'react-native'
import { withUnistyles } from 'react-native-unistyles'
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types'
import { Pie, PolarChart } from 'victory-native'

import { Text } from '~/theme/components/Text'
import { tokens } from '~/theme/tokens'

const size = 90

type Props = {
  theme: UnistylesTheme
}

export const Gauge = withUnistyles(
  function Gauge({ theme }: Props) {
    const label = '40%'
    const data = useMemo(() => {
      return [
        { value: 40, color: theme.colors.contrastPrimary, label: 'label1' },
        { value: 60, color: theme.colors.fillSecondary, label: 'label2' },
      ]
    }, [theme.colors.contrastPrimary, theme.colors.fillSecondary])

    return (
      <View style={[tokens.h(size), tokens.w(size), tokens.align_center, tokens.justify_center]}>
        <PolarChart
          data={data}
          labelKey="label"
          valueKey="value"
          colorKey="color"
          canvasStyle={{ width: size, height: size }}
        >
          <Pie.Chart innerRadius="80%" startAngle={270} size={size} />
        </PolarChart>
        <Text type="h5" weight="semibold" style={{ position: 'absolute' }}>
          {label}
        </Text>
      </View>
    )
  },
  (theme) => ({ theme }),
)
