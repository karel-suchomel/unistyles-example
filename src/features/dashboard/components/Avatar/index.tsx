import { styles } from './styles'

import { Image } from '~/components/Image'

type Props = {
  source?: string
}

export function Avatar({ source }: Props) {
  return (
    <Image
      style={styles.image}
      transition={{ effect: 'cross-dissolve', duration: 400 }}
      accessibilityRole="image"
      source={require('assets/images/avatar.jpg')}
    />
  )
}
