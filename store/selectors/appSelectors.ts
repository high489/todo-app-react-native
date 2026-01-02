import { AppState } from '@store/slices/appSlice'

export const selectAppSettings = (state: { app: AppState }): AppState => state.app