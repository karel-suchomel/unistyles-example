import { useRouter, useSegments } from 'expo-router'
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'

import { type User } from '../types'

import { removeData, StorageKeys, useStorageObject, useStorageString } from '~/services/storage'

type AuthContextType = {
  user?: User
  isSignedIn: boolean
  signOut: () => Promise<void>
  signIn: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const [accessToken, setAccessToken] = useStorageString(StorageKeys.AccessToken)
  const [refreshToken, setRefreshToken] = useStorageString(StorageKeys.RefreshToken)
  const [user, setUser] = useStorageObject<User>(StorageKeys.User)
  const isSignedIn = Boolean(accessToken) && Boolean(refreshToken)
  useProtectedRoute(isSignedIn)

  const signIn = useCallback(async () => {
    // TODO
    setAccessToken('accessToken')
    setRefreshToken('refreshToken')
    setUser({ name: 'Patrick Bateman', avatar: '' })
  }, [setAccessToken, setRefreshToken, setUser])

  const signOut = useCallback(async () => {
    // TODO
    removeData(StorageKeys.AccessToken)
    removeData(StorageKeys.RefreshToken)
  }, [])

  const values = useMemo(() => {
    return {
      user,
      isSignedIn,
      signIn,
      signOut,
    }
  }, [signIn, signOut, user, isSignedIn])

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

function useProtectedRoute(isSignedIn: boolean) {
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!isSignedIn && !inAuthGroup) {
      router.replace('/onboarding')
    } else if (isSignedIn && inAuthGroup) {
      router.replace('/(app)')
    }
  }, [isSignedIn, router, segments])
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be wrapped in a <AuthProvider />')
  }

  return context
}
