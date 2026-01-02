import { StatusBar, StyleSheet, View } from 'react-native'

import { COLORS } from '@constants'
import { useTodo } from '@hooks'
import { Header, TodoCreator, TodoList } from '@layouts'


export default function Index() {
  const {
    todos,
    isLoading,
    completedTodos,
    onAddTodo,
    onCheckTodo,
    onUpdateTodoTitle,
    onDeleteTodo,
  } = useTodo()

  if (isLoading) {
    return null
  }

  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle='light-content'/>
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onUpdateTodoTitle={onUpdateTodoTitle}
        onDeleteTodo={onDeleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  }
})