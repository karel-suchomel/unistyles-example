import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { PropsWithChildren, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { OfflineMessage } from '~/components/OfflineMessage'
import { AuthProvider } from '~/features/auth/provider'
import { useIsOnline } from '~/hooks/useIsOnline'
import { useOTAUpdates } from '~/hooks/useOTAUpdate'
import { commonStyles } from '~/styles/commonStyles'
import { DarkModeTransitionProvider } from '~/theme/provider/DarkModeTransitionProvider'
import { getStatusBarStyle } from '~/theme/utils'
import { setFontScaling } from '~/utils/setFontScaling'

import 'i18n'

void SplashScreen.preventAutoHideAsync()
setFontScaling()

export function Provider({ children }: PropsWithChildren) {
  const { isOnline } = useIsOnline()
  const [loaded, error] = useFonts({
    HelveticaNeueRoman: require('../../assets/fonts/HelveticaNeueRoman.otf'),
    HelveticaNeueBold: require('../../assets/fonts/HelveticaNeueBold.otf'),
    HelveticaNeueMedium: require('../../assets/fonts/HelveticaNeueMedium.otf'),
    HelveticaNeueItalic: require('../../assets/fonts/HelveticaNeueItalic.otf'),
    Outfit: require('../../assets/fonts/Outfit.ttf'),
  })
  useMMKVDevTools()
  useOTAUpdates()

  useEffect(() => {
    if (loaded || error) {
      void SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <KeyboardProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={commonStyles.f1}>
            <DarkModeTransitionProvider>
              <StatusBar backgroundColor="transparent" translucent style={getStatusBarStyle()} />
              {children}
              {isOnline === false && <OfflineMessage />}
            </DarkModeTransitionProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </AuthProvider>
    </KeyboardProvider>
  )
}
