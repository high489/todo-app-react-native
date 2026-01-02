import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

import { STORAGE_KEY } from '@constants'
import { Todo } from '@types'

const defaultTodos: Todo[] = [
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
]

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos)
  const [isLoading, setIsLoading] = useState(false)

  const completedTodos = todos.filter((todo) => todo.isCompleted)

  const loadTodos = async () => {
    setIsLoading(true)
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY)
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (e) {
      console.log(e)
    }
  }

  const onAddTodo = (title: Todo['title']) => {
    setTodos([...todos, { id: Number(new Date()), title, isCompleted: false }])
  }

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    }))
  }

  const onUpdateTodoTitle = (id: Todo['id'], title: Todo['title']) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title } : todo))
  }

  const onDeleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    loadTodos()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      saveTodos()
    }
  }, [todos])

  return {
    todos,
    isLoading,
    completedTodos,
    onAddTodo,
    onCheckTodo,
    onUpdateTodoTitle,
    onDeleteTodo,
  }
}

export { useTodo }
