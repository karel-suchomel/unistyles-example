import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { useRouter } from 'expo-router'
import { useRef } from 'react'

import { BackButton } from '../components/BackButton'

export function useHeaderProps(props: BottomTabHeaderProps | NativeStackHeaderProps) {
  const { options } = props
  const title = options.title
  const router = useRouter()

  // freeze the state otherwise back arrow blinks, screen can't really change if it
  // can go back or not go back

  const canGoBack = useRef(router.canGoBack())

  const headerRight = options?.headerRight?.({
    tintColor: options.headerTintColor,
    canGoBack: canGoBack.current,
  })

  const headerLeft = options.headerLeft ? (
    options.headerLeft({
      tintColor: options.headerTintColor,
      canGoBack: canGoBack.current,
    })
  ) : (
    <BackButton style={{ backgroundColor: options.headerTintColor }} />
  )

  return {
    ...props,
    title,
    headerLeft,
    headerRight,
  }
}
