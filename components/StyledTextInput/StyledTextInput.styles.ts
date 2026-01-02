import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.PRIMARY_TEXT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER,
  },
  error: {
    borderColor: COLORS.PRIMARY_RED,
  },
})

export default styles