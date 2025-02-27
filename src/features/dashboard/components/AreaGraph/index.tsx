import { Circle, LinearGradient, useFont, vec, Text as SkText } from '@shopify/react-native-skia'
import { useMemo } from 'react'
import { View } from 'react-native'
import { SharedValue, useDerivedValue } from 'react-native-reanimated'
import { withUnistyles } from 'react-native-unistyles'
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types'
import { CartesianChart, Area, Line, useChartPressState } from 'victory-native'

import { tokens } from '~/theme/tokens'

const helveticaBold = require('../../../../../assets/fonts/HelveticaNeueBold.otf')
const helvetica = require('../../../../../assets/fonts/HelveticaNeueRoman.otf')

type Props = {
  theme: UnistylesTheme
  updateGraph: boolean
}

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export function AreaGraphComponent({ theme, updateGraph }: Props) {
  const font = useFont(helvetica, 12)
  const fontBold = useFont(helveticaBold, 18)
  const DATA = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      day: days[i],
      y: Math.abs(50 * Math.random()),
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateGraph])

  const { state, isActive } = useChartPressState({ x: 'M', y: { y: 0 } })
  const value = useDerivedValue(() => {
    return Math.ceil(state.y.y.value.value).toString()
  }, [state])

  return (
    <View style={[tokens.w('100%'), tokens.h(200), tokens.pt('xl')]}>
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={['y']}
        domain={{
          y: [0],
        }}
        domainPadding={{ top: theme.spacing._3xl, bottom: theme.spacing._3xs }}
        axisOptions={{
          font,
          labelColor: theme.colors.textPrimary,
          lineColor: theme.colors.contrastSecondary,
          labelOffset: theme.spacing.md,
        }}
        chartPressState={state}
      >
        {({ points, chartBounds }) => {
          return (
            <>
              {isActive && (
                <SkText
                  x={chartBounds.left + theme.spacing.md}
                  y={theme.spacing.xl}
                  font={fontBold}
                  text={value}
                  color={theme.colors.textPrimary}
                  style="fill"
                />
              )}
              <Line
                points={points.y}
                color={theme.colors.contrastPrimary}
                connectMissingData
                curveType="natural"
                strokeWidth={2}
                animate={{ type: 'spring', duration: 300, stiffness: 150, damping: 18 as any }}
              />
              <Area
                points={points.y}
                y0={chartBounds.bottom}
                color={theme.colors.contrastPrimary}
                connectMissingData
                curveType="natural"
                animate={{ type: 'spring', duration: 300, stiffness: 150, damping: 18 as any }}
              >
                <LinearGradient
                  start={vec(chartBounds.bottom, 50)}
                  end={vec(chartBounds.bottom, chartBounds.bottom)}
                  colors={[
                    `${theme.colors.contrastPrimary}90`,
                    `${theme.colors.contrastPrimary}30`,
                  ]}
                />
              </Area>
              {isActive ? <Tooltip x={state.x.position} y={state.y.y.position} /> : null}
            </>
          )
        }}
      </CartesianChart>
    </View>
  )
}

const Tooltip = ({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) => {
  return <Circle cx={x} cy={y} color="grey" opacity={0.8} r={8} />
}

export const AreaGraph = withUnistyles(AreaGraphComponent, (theme) => ({
  theme,
}))
