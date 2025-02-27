import i18n from 'i18n'

export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return i18n.t('common:morning')
  } else if (hour >= 12 && hour < 17) {
    return i18n.t('common:afternoon')
  } else if (hour >= 17 && hour < 22) {
    return i18n.t('common:evening')
  }
  return i18n.t('common:night')
}
