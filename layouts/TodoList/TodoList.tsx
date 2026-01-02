import styles from './TodoList.styles'

import { FC } from 'react'
import { FlatList, View } from 'react-native'

import { Todo } from '@types'
import { TodoItem } from '../TodoItem'

type TodoListProps = {
  todos: Todo[]
  onCheckTodo: (id: Todo['id']) => void
  onUpdateTodoTitle: (id: Todo['id'], title: Todo['title']) => void
  onDeleteTodo: (id: Todo['id']) => void
}

const TodoList: FC<TodoListProps> = ({
  todos,
  onCheckTodo,
  onUpdateTodoTitle,
  onDeleteTodo,
}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
            onCheck={onCheckTodo}
            onUpdateTitle={onUpdateTodoTitle}
            onDelete={onDeleteTodo}
          />
        )}
      />
    </View>
  )
}

export { TodoList }
