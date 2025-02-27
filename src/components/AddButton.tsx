import {
  type NativeStackHeaderRightProps,
  type NativeStackHeaderLeftProps,
} from '@react-navigation/native-stack'

import IconButton from '~/theme/components/IconButton'

export function AddButton({ tintColor }: NativeStackHeaderRightProps & NativeStackHeaderLeftProps) {
  return <IconButton name="plus" style={tintColor && { backgroundColor: tintColor }} />
}
