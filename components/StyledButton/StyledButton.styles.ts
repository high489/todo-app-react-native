import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.7,
  },
  // sizes
  small: {
    paddingHorizontal: 12,
  },
  large: {
    paddingHorizontal: 30,
  },
  // variants
  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderColor: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
})

export default styles