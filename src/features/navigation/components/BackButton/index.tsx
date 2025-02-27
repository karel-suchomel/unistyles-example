import { useRouter } from 'expo-router'
import { StyleProp, ViewStyle } from 'react-native'

import IconButton from '~/theme/components/IconButton'

type Props = {
  style?: StyleProp<ViewStyle>
}

export function BackButton({ style }: Props) {
  const router = useRouter()

  if (!router.canGoBack()) {
    return null
  }
  return <IconButton name="chevron-left" onPress={router.back} style={style} />
}
