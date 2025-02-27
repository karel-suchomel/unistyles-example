import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types'

import { sharedTheme } from '.'

export type Spacing = keyof (typeof sharedTheme)['spacing']
export type Color = NonNullable<UnistylesTheme['colors']>
