import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allValues: ['Обо мне', 'Моя работы', 'Мои соц.сети'],
}
initialState.selectedValue = initialState.allValues[0]


const headerSlice = createSlice({
  name: 'main',
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