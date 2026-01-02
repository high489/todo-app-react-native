import styles from './StyledModal.styles'

import { FC } from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'

type StyledModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const StyledModal: FC<StyledModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType='fade'
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackgroundContainer}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.contentContainer}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export { StyledModal }
