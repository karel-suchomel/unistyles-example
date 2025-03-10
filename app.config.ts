/* eslint-disable import/consistent-type-specifier-style */
import { ExpoConfig, IOS } from '@expo/config-types'

import packageJson from './package.json'

import type { OtaUpdatePriority } from '~/hooks/useOTAUpdate'
import { Environment } from '~/types/env'

declare const process: {
  env: {
    EXPO_PUBLIC_APP_ENV: Environment
    EXPO_PUBLIC_APP_VERSION: string
    EXPO_PUBLIC_BUILD_NUMBER: string
  }
}

// Template defaults uncomment if you are working on the template
// const config = {
//   appIdentifierBase: 'com.strv.rntemplate',
//   expoProjectId: '46e1c780-9495-4650-93c8-7f465bf4e1d0',
//   expoProjectOwner: 'strv-internal',
//   appScheme: 'template-react-native-expo',
// }

// Your project defaults
const config = {
  appName: 'UnistylesExample',
  appIdentifierBase: 'com.carlos154.unistylesexample',
  expoProjectId: 'e5b4fd01-d59b-4c55-aad3-e6f1fe347b35',
  expoProjectOwner: 'carlos154',
  appScheme: 'com.carlos154.unistylesexample',
  slug: 'unistyles-example',
}

const environment = process.env.EXPO_PUBLIC_APP_ENV || 'dev'

// your custom fonts
const fonts = [
  './assets/fonts/Outfit.ttf',
  './assets/fonts/HelveticaNeueRoman.otf',
  './assets/fonts/HelveticaNeueBold.otf',
  './assets/fonts/HelveticaNeueItalic.otf',
  './assets/fonts/HelveticaNeueMedium.otf',
]

const getEnvironmentInfo = (): {
  name: ExpoConfig['name']
  appIdentifier: IOS['bundleIdentifier']
  icon: ExpoConfig['icon']
} => {
  const appIdentifier = config.appIdentifierBase
  const appName = config.appName

  if (environment === 'production')
    return {
      name: appName,
      appIdentifier,
      icon: './assets/icon.png',
    }

  return {
    name: `${appName} ${environment.toUpperCase()}`,
    appIdentifier: `${appIdentifier}.${environment}`,
    icon: `./assets/icon-${environment}.png`,
  }
}

const { name, appIdentifier, icon } = getEnvironmentInfo()

const plugins: ExpoConfig['plugins'] = [
  ['expo-build-properties'],
  ['expo-font', { fonts }],
  ['expo-router'],
  ['expo-localization'],
]

// UPDATE VERSION AND BUILDNUMBER
const version = process.env.EXPO_PUBLIC_APP_VERSION || packageJson.version
const buildNumber = process.env.EXPO_PUBLIC_BUILD_NUMBER || '1'

const fallbackToCacheTimeout = 0
const otaUpdatePriority: OtaUpdatePriority = 'normal'

const expoConfig: ExpoConfig = {
  owner: config.expoProjectOwner,
  name,
  newArchEnabled: true,
  slug: config.slug,
  version,
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  scheme: config.appScheme,
  orientation: 'default',
  icon,
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber,
    supportsTablet: false,
    bundleIdentifier: appIdentifier,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      LSApplicationQueriesSchemes: ['itms-apps'],
    },
  },
  web: {
    bundler: 'metro',
  },
  android: {
    versionCode: parseInt(buildNumber, 10),
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: appIdentifier,
    // necessary from Android 12
    intentFilters: [
      { action: 'VIEW', data: { scheme: 'mailto' } },
      { action: 'VIEW', data: { scheme: 'sms' } },
      { action: 'VIEW', data: { scheme: 'tel' } },
    ],
  },
  jsEngine: 'hermes',
  plugins,
  extra: {
    fallbackToCacheTimeout,
    otaUpdatePriority,
    eas: {
      projectId: config.expoProjectId,
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
}

export default expoConfig
