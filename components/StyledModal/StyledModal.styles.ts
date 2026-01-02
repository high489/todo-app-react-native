import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    width: '90%',
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
})

export default styles