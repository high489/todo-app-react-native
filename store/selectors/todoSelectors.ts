import { TodoState } from '@store/slices/todoSlice'

export const selectTodos = (state: { todo: TodoState }): TodoState['todos'] =>
  state.todo.todos