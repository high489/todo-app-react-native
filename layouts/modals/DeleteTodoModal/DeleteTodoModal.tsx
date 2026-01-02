import styles from './DeleteTodoModal.styles'

import { FC } from 'react'
import { View } from 'react-native'

import { StyledButton, StyledModal, StyledText } from '@components'

type DeleteTodoModalProps = {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

const DeleteTodoModal: FC<DeleteTodoModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant='heading'>Delete Todo</StyledText>
        <StyledText variant='subtitle'>
          Do you want to delete this todo?
        </StyledText>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          label='Delete'
          onPress={onDelete}
        />
        <StyledButton 
          variant='secondary'
          label='Cancel' 
          onPress={onClose}
        />
      </View>
    </StyledModal>
  )
}

export { DeleteTodoModal }
