import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '300',
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
})

export default styles