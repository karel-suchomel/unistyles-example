import { TabsDescriptor, TabsSlotRenderOptions } from 'expo-router/ui'
import { StyleSheet } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { Screen } from 'react-native-screens'

type Props = {
  descriptor: TabsDescriptor
  options: TabsSlotRenderOptions
}

export function TabSlot({ descriptor, options }: Props) {
  const { unmountOnBlur } = descriptor.options
  const { isFocused } = options

  if (unmountOnBlur && !isFocused) {
    return null
  }

  if (!isFocused) {
    return null
  }

  return (
    <Screen
      key={descriptor.route.key}
      enabled={options.detachInactiveScreens}
      activityState={isFocused ? 2 : 0}
      freezeOnBlur={descriptor.options.freezeOnBlur}
      style={[styles.screen, isFocused ? styles.focused : styles.unfocused]}
    >
      {isFocused && (
        <Animated.View
          style={styles.screenContainer}
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
        >
          {descriptor.render()}
        </Animated.View>
      )}
    </Screen>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    position: 'relative',
  },
  focused: {
    zIndex: 1,
    display: 'flex',
    flexShrink: 0,
    flexGrow: 1,
  },
  unfocused: {
    zIndex: -1,
    display: 'none',
    flexShrink: 1,
    flexGrow: 0,
  },
})
