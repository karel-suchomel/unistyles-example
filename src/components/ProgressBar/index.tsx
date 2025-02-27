import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  progress: number
}

export function ProgressBar({ progress }: Props) {
  const animatedProgress = useSharedValue(0)

  useEffect(() => {
    animatedProgress.value = withSpring(progress, { damping: 18, stiffness: 150 })
  }, [animatedProgress, progress])

  const rStyle = useAnimatedStyle(() => ({
    width: `${animatedProgress.value}%`,
  }))
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, rStyle]} />
    </View>
  )
}
