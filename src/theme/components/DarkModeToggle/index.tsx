import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { UnistylesRuntime } from 'react-native-unistyles'

import { Icon } from '~/features/icons/components/Icon'
import { useDarkModeTransition } from '~/theme/provider/DarkModeTransitionProvider'

export function DarkModeToggle() {
  const { toggle, isActive } = useDarkModeTransition()
  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart((event) => {
      if (!isActive) {
        void toggle(event.absoluteX, event.absoluteY)
      }
    })

  return (
    <GestureDetector gesture={tap}>
      {UnistylesRuntime.themeName === 'light' ? <Icon name="light" /> : <Icon name="dark" />}
    </GestureDetector>
  )
}
