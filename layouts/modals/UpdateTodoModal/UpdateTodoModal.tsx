import styles from './UpdateTodoModal.styles'

import { FC, useEffect, useState } from 'react'
import { View } from 'react-native'

import { StyledButton, StyledModal, StyledText, StyledTextInput } from '@components'
import { Todo } from '@types'

type UpdateTodoModalProps = {
  title: Todo['title']
  isOpen: boolean
  onClose: () => void
  onUpdate: (title: string) => void
}

const UpdateTodoModal: FC<UpdateTodoModalProps> = ({
  title,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const [ updatedTitle, setUpdatedTitle ] = useState<Todo['title']>(title)
  const [ inputError, setInputError ] = useState<boolean>(false)

  const onPressClose = () => {
    onClose()
    setUpdatedTitle(title)
  }
  
  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true)
      return
    }
    onUpdate(updatedTitle)
    onPressClose()
  }

  useEffect(() => {
    if (inputError && updatedTitle) {
      setInputError(false)
    }
  }, [updatedTitle])

  useEffect(() => {
    setUpdatedTitle(title)
  }, [isOpen])

  return (
    <StyledModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <View style={styles.modalContentContainer}>
        <StyledText variant='heading'>Update Todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            placeholder='Update Todo...'
            isError={inputError}
          />
        </View>
        <View style={styles.controlButtonsContainer}>
          <StyledButton
            label='Save'
            onPress={onPressSave}
            disabled={inputError}
          />
          <StyledButton
            variant='secondary'
            label='Cancel'
            onPress={onPressClose}
          />
        </View>
      </View>
    </StyledModal>
  )
}

export { UpdateTodoModal }
