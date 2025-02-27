import { type IconName } from '../icons/types'

export type Achievement = {
  id: number
  title: string
  count: number
  unit: string
  icon?: IconName
}
