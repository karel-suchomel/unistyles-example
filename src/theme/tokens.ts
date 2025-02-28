/* eslint-disable camelcase */
import { StyleSheet } from 'react-native-unistyles'

import { Spacing } from './types'

export const tokens = StyleSheet.create((theme) => ({
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  inset_0: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  z_10: {
    zIndex: 10,
  },
  z_20: {
    zIndex: 20,
  },
  z_30: {
    zIndex: 30,
  },
  z_40: {
    zIndex: 40,
  },
  z_50: {
    zIndex: 50,
  },
  overflow_hidden: {
    overflow: 'hidden',
  },
  w_full: {
    width: '100%',
  },
  h_full: {
    height: '100%',
  },
  w: (value) => ({
    width: value,
  }),
  h: (value) => ({
    height: value,
  }),
  min_w: (value) => ({
    minWidth: value,
  }),
  min_h: (value) => ({
    minHeight: value,
  }),
  max_w: (value) => ({
    maxWidth: value,
  }),
  max_h: (value) => ({
    maxHeight: value,
  }),
  bg: (value: keyof typeof theme.colors) => ({
    backgroundColor: theme.colors[value],
  }),
  color: (value: keyof typeof theme.colors) => ({
    color: theme.colors[value],
  }),
  bg_transparent: {
    backgroundColor: 'transparent',
  },
  gap: (value: Spacing) => ({
    gap: theme.spacing[value],
  }),
  flex: {
    display: 'flex',
  },
  flex_col: {
    flexDirection: 'column',
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_col_reverse: {
    flexDirection: 'column-reverse',
  },
  flex_row_reverse: {
    flexDirection: 'row-reverse',
  },
  flex_wrap: {
    flexWrap: 'wrap',
  },
  flex_nowrap: {
    flexWrap: 'nowrap',
  },
  flex_0: {
    flex: 0,
  },
  flex_1: {
    flex: 1,
  },
  flex_grow: {
    flexGrow: 1,
  },
  flex_shrink: {
    flexShrink: 1,
  },
  flex_shrink_0: {
    flexShrink: 0,
  },
  justify_start: {
    justifyContent: 'flex-start',
  },
  justify_center: {
    justifyContent: 'center',
  },
  justify_between: {
    justifyContent: 'space-between',
  },
  justify_end: {
    justifyContent: 'flex-end',
  },
  align_center: {
    alignItems: 'center',
  },
  align_start: {
    alignItems: 'flex-start',
  },
  align_end: {
    alignItems: 'flex-end',
  },
  align_baseline: {
    alignItems: 'baseline',
  },
  align_stretch: {
    alignItems: 'stretch',
  },
  self_auto: {
    alignSelf: 'auto',
  },
  self_start: {
    alignSelf: 'flex-start',
  },
  self_end: {
    alignSelf: 'flex-end',
  },
  self_center: {
    alignSelf: 'center',
  },
  self_stretch: {
    alignSelf: 'stretch',
  },
  self_baseline: {
    alignSelf: 'baseline',
  },
  text_left: {
    textAlign: 'left',
  },
  text_center: {
    textAlign: 'center',
  },
  text_right: {
    textAlign: 'right',
  },
  border_radius: (value: keyof typeof theme.borderRadius) => ({
    borderRadius: theme.borderRadius[value],
  }),
  border: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  border_t: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  border_b: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  border_l: {
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
  border_r: {
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  p_0: {
    padding: 0,
  },
  p: (value: Spacing) => ({
    padding: theme.spacing[value],
  }),
  px_0: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  px: (value: Spacing) => ({
    paddingLeft: theme.spacing[value],
    paddingRight: theme.spacing[value],
  }),
  py_0: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  py: (value: Spacing) => ({
    paddingTop: theme.spacing[value],
    paddingBottom: theme.spacing[value],
  }),
  pt_0: {
    paddingTop: 0,
  },
  pt: (value: Spacing) => ({
    paddingTop: theme.spacing[value],
  }),
  pb_0: {
    paddingBottom: 0,
  },
  pb: (value: Spacing) => ({
    paddingBottom: theme.spacing[value],
  }),
  pl_0: {
    paddingLeft: 0,
  },
  pl: (value: Spacing) => ({
    paddingLeft: theme.spacing[value],
  }),
  pr_0: {
    paddingRight: 0,
  },
  pr: (value: Spacing) => ({
    paddingRight: theme.spacing[value],
  }),
  m_0: {
    margin: 0,
  },
  m: (value: Spacing) => ({
    margin: theme.spacing[value],
  }),
  m_auto: {
    margin: 'auto',
  },
  mx_0: {
    marginLeft: 0,
    marginRight: 0,
  },
  mx: (value: Spacing) => ({
    marginLeft: theme.spacing[value],
    marginRight: theme.spacing[value],
  }),
  mx_auto: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  my_0: {
    marginTop: 0,
    marginBottom: 0,
  },
  my: (value: Spacing) => ({
    marginTop: theme.spacing[value],
    marginBottom: theme.spacing[value],
  }),
  my_auto: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  mt_0: {
    marginTop: 0,
  },
  mt: (value: Spacing) => ({
    marginTop: theme.spacing[value],
  }),
  mt_auto: {
    marginTop: 'auto',
  },
  mb_0: {
    marginBottom: 0,
  },
  mb: (value: Spacing) => ({
    marginBottom: theme.spacing[value],
  }),
  mb_auto: {
    marginBottom: 'auto',
  },
  ml_0: {
    marginLeft: 0,
  },
  ml: (value: Spacing) => ({
    marginLeft: theme.spacing[value],
  }),
  ml_auto: {
    marginLeft: 'auto',
  },
  mr_0: {
    marginRight: 0,
  },
  mr: (value: Spacing) => ({
    marginRight: theme.spacing[value],
  }),
  mr_auto: {
    marginRight: 'auto',
  },
  pointer_events_none: {
    pointerEvents: 'none',
  },
  pointer_events_auto: {
    pointerEvents: 'auto',
  },
  user_select_none: {
    userSelect: 'none',
  },
  user_select_text: {
    userSelect: 'text',
  },
  user_select_all: {
    userSelect: 'all',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  strike_through: {
    textDecorationLine: 'line-through',
  },
  text_p1: {
    fontSize: 16,
  },
}))
