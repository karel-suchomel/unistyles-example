import { MMKV, useMMKVBoolean, useMMKVObject, useMMKVString } from 'react-native-mmkv'
import { type StateStorage } from 'zustand/middleware'

export const storage = new MMKV()

export enum StorageKeys {
  AccessToken = 'accessToken',
  RefreshToken = 'refreshToken',
  Theme = 'theme',
  Language = 'language',
  User = 'user',
}

export const useStorageString = (key: StorageKeys) => useMMKVString(key)
export const useStorageObject = <T>(key: StorageKeys) => useMMKVObject<T>(key)
export const useStorageBoolean = (key: StorageKeys) => useMMKVBoolean(key)

export function clearAll() {
  storage.clearAll()
}

export const storeData = (key: StorageKeys, value: boolean | string | number | ArrayBuffer) => {
  try {
    storage.set(key, value)
    return true
  } catch {
    return false
  }
}

export const storeObjectData = (key: StorageKeys, value: object) => {
  return storeData(key, JSON.stringify(value))
}

export const getStringData = (key: StorageKeys) => {
  return storage.getString(key)
}

export const getBooleanData = (key: StorageKeys) => {
  return storage.getBoolean(key)
}

export const getNumberData = (key: StorageKeys) => {
  return storage.getNumber(key)
}

export const getObjectData = (key: StorageKeys) => {
  const data = storage.getString(key)
  return data ? JSON.parse(data) : null
}

export const removeData = (key: StorageKeys) => {
  storage.delete(key)
}

export const mmkvStorage: StateStorage = {
  setItem: (name, value) => storage.set(name, value),
  getItem: (name) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name) => storage.delete(name),
}
