import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allValues: {
      'Обо мне': 'about',
      'Моя работы': 'works',
      'Мои соц.сети': 'networks'
    },
    selectedValue: 'Обо мне'
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSelectedValue: (state, action) => {
        const newTitle = action.payload;
        state.selectedValue = newTitle;
    }
  }
});

export const {setSelectedValue} = headerSlice.actions

export default headerSlice.reducer