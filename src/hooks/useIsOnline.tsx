import { useNetInfo } from '@react-native-community/netinfo'

export function useIsOnline() {
  const { isInternetReachable } = useNetInfo()

  return { isOnline: isInternetReachable }
}
