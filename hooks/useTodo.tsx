import { useAppDispatch, useAppSelector } from '@store'
import { selectTodos } from '@store/selectors'
import { addTodo, deleteTodo, toggleTodo, updateTodoTitle } from '@store/slices'
import { Todo } from '@types'

const useTodo = () => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  const completedTodos = todos.filter((todo) => todo.isCompleted)

  const onAddTodo = (title: Todo['title']) => {
    dispatch(addTodo({ id: Number(new Date()), title, isCompleted: false }))
  }

  const onCheckTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id))
  }

  const onUpdateTodoTitle = (id: Todo['id'], title: Todo['title']) => {
    dispatch(updateTodoTitle({ id, title }))
  }

  const onDeleteTodo = (id: Todo['id']) => {
    dispatch(deleteTodo(id))
  }

  return {
    todos,
    completedTodos,
    onAddTodo,
    onCheckTodo,
    onUpdateTodoTitle,
    onDeleteTodo,
  }
}

export { useTodo }
