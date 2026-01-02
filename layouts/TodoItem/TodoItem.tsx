import styles from './TodoItem.styles'

import { FC, useState } from 'react'
import { Vibration, View } from 'react-native'

import { StyledButton, StyledCheckbox, StyledText } from '@components'
import { DeleteTodoModal, UpdateTodoModal } from '@layouts/modals'
import { Todo } from '@types'

type TodoItemProps = Todo & {
  onCheck: (id: Todo['id']) => void
  onUpdateTitle: (id: Todo['id'], title: Todo['title']) => void
  onDelete: (id: Todo['id']) => void
}

const TodoItem: FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  onCheck,
  onUpdateTitle,
  onDelete,
}) => {
  const [ isUpdateModalOpen, setIsUpdateModalOpen ] = useState<boolean>(false)
  const [ isDeleteModalOpen, setIsDeleteModalOpen ] = useState<boolean>(false)

  const onPressCheck = () => {
    onCheck(id)
  }

  const onConfirmDelete = () => {
    onDelete(id)
    Vibration.vibrate(50)
  }

  const onPressUpdate = () => {
    setIsUpdateModalOpen(true)
  }

  const onPressDelete = () => {
    setIsDeleteModalOpen(true)
  }

  return (
    <View style={styles.container}>

      <View style={styles.checkTitleContainer}>
        <StyledCheckbox
          checked={isCompleted}
          onCheck={onPressCheck}
        />
        <StyledText
          style={[
            { textDecorationLine: isCompleted ? 'line-through' : 'none' }
          ]}
        >
          {title}
        </StyledText>
      </View>

      <View style={styles.controlsContainer}>
        <StyledButton
          icon='pencil'
          size='small'
          onPress={onPressUpdate}
        />
        <UpdateTodoModal
          title={title}
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          onUpdate={(title) => onUpdateTitle(id, title)}
        />
        <StyledButton 
          icon='trash'
          size='small'
          variant='delete'
          onPress={onPressDelete}
        />
        <DeleteTodoModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={onConfirmDelete}
        />
      </View>

    </View>
  )
}

export { TodoItem }
