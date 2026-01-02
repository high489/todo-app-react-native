import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Todo } from '@types'

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: 'Buy milk',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Buy bread',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Buy eggs',
      isCompleted: true,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (
      state: TodoState,
      action: PayloadAction<Todo>
    ) => {
      const todo = action.payload
      state.todos.push(todo)
    },
    toggleTodo: (
      state: TodoState,
      action: PayloadAction<number>
    ) => {
      const id = action.payload
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    },
    updateTodoTitle: (
      state: TodoState,
      action: PayloadAction<{
        id: number
        title: string
      }>
    ) => {
      const { id, title } = action.payload
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    },
    deleteTodo: (
      state: TodoState,
      action: PayloadAction<number>
    ) => {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
  }
})

export const {
  addTodo,
  toggleTodo,
  updateTodoTitle,
  deleteTodo,
} = todoSlice.actions

export default todoSlice.reducer