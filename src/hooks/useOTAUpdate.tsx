import Constants from 'expo-constants'
import * as Updates from 'expo-updates'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { useOnForeground } from '~/hooks/useOnForeground'

export type OtaUpdatePriority = 'high' | 'normal'
export function useOTAUpdates() {
  const [wasUpdatePrompted, setWasUpdatePrompted] = useState(false)
  const fallbackToCacheTimeout = Constants.expoConfig?.extra?.fallbackToCacheTimeout as
    | number
    | undefined

  const checkForOTAUpdate = useCallback(async () => {
    if (__DEV__) return
    try {
      const updateStatus = await Updates.checkForUpdateAsync()
      if (!updateStatus.isAvailable) return

      const update = await Updates.fetchUpdateAsync()
      const manifest = update.manifest
      const otaUpdatePriority =
        manifest &&
        'extra' in manifest &&
        (manifest.extra?.expoClient?.extra?.otaUpdatePriority as OtaUpdatePriority)

      // in case app is not updated during fallbackToCacheTimeout, check if to update during second launch (normal) or prompt user due to `high` priority
      if (otaUpdatePriority === 'high') {
        setWasUpdatePrompted(true)
        Alert.alert(
          'Update',
          'A new version is available. Press to update.',
          [{ text: 'Update', onPress: () => void Updates.reloadAsync() }],
          { cancelable: false },
        )
      }
    } catch (error) {
      console.warn('error checking for OTA update', error)
    }
  }, [])

  // run after fallbackToCacheTimeout passed in case the app did not manage to update itself
  useEffect(() => {
    const cacheTimeoutWithBuffer = (fallbackToCacheTimeout ?? 0) + 100
    const timeout = setTimeout(() => {
      if (!wasUpdatePrompted && fallbackToCacheTimeout) {
        void checkForOTAUpdate()
      }
    }, cacheTimeoutWithBuffer)

    return () => clearTimeout(timeout)
  }, [checkForOTAUpdate, fallbackToCacheTimeout, wasUpdatePrompted])

  // runs on mount and when foreground/background state changes
  return useOnForeground(checkForOTAUpdate, true)
}
