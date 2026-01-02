import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Lang {
  EN = 'en',
  RU = 'ru',
}

export interface AppState {
  lang: Lang
}

export interface UpdateAppSettingsPayload {
  lang: Lang
}

const initialState = {
  lang: Lang.EN,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAppSettings: (
      state: AppState,
      action: PayloadAction<UpdateAppSettingsPayload>
    ) => {
      const { lang } = action.payload
      state.lang = lang
    },
  }
})

export const { updateAppSettings } = appSlice.actions

export default appSlice.reducer