import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create((theme, rt) => ({
  wrapper: {
    backgroundColor: theme.colors.backgroundPrimary,
    paddingTop: rt.insets.top,
    paddingLeft: rt.insets.left,
    paddingRight: rt.insets.right,
  },
  container: {
    height: 66,
    paddingHorizontal: theme.spacing.xl,
  },
  content: (hasItems: boolean, color?: string) => ({
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: hasItems ? color ?? theme.colors.textPrimary : 'transparent',
  }),
  titleContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
    minWidth: 48,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
    minWidth: 48,
  },
}))
