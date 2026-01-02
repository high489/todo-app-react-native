import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  checkTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    gap: 5,
  }
})

export default styles