import styles from './TodoCreator.styles'

import { FC, useEffect, useState } from 'react'
import { Keyboard, View } from 'react-native'

import { StyledButton, StyledTextInput } from '@components'
import { Todo } from '@types'

type TodoCreatorProps = {
  onAddTodo: (title: Todo['title']) => void,
}

const TodoCreator: FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('')
  const [inputError, setInputError] = useState(false)

  const onPressAdd = () => {
    if (!text) {
      setInputError(true)
      return
    }
    Keyboard.dismiss()
    onAddTodo(text)
    setText('')
  }

  useEffect(() => {
    if (inputError && text) {
      setInputError(false)
    }
  }, [inputError, text])

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder='Add a task...'
        value={text}
        onChangeText={setText}
        isError={inputError}
      />
      <StyledButton
        label='+'
        onPress={onPressAdd}
        disabled={inputError}
        size='large'
      />
    </View>
  )
}

export { TodoCreator }
