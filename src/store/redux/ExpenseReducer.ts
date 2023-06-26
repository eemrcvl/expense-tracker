import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Expense} from '../../types/expense';

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [] as Expense[],
  reducers: {
    setExpenses: (state, action: PayloadAction<Expense[]>) => {
      return action.payload;
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<{id: string}>) => {
      state.splice(
        state.findIndex(expense => expense.id === action.payload.id),
        1,
      );
    },
  },
});

export const {addExpense} = expenseSlice.actions;
export const {deleteExpense} = expenseSlice.actions;
export const {setExpenses} = expenseSlice.actions;
export default expenseSlice.reducer;
