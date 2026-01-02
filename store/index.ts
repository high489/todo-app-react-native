import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  createTransform,
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

import { baseApi } from './api/baseApi'
import appReducer from './slices/appSlice'
import todoReducer from './slices/todoSlice'

const reducers = combineReducers({
  app: appReducer,
  todo: todoReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export type RootState = ReturnType<typeof reducers>

const rtkQueryTransform = createTransform(
  (inboundState: any) => {
    return undefined
  },
  (outboundState: any) => {
    return undefined
  },
  { whitelist: [baseApi.reducerPath] }
)

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: [ 'todo' ],
  transforms: [rtkQueryTransform],
  // Remove blacklist as we're using transforms now
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }).concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store