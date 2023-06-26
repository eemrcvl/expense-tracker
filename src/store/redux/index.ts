import {configureStore} from '@reduxjs/toolkit';
import ExpenseReducer from './ExpenseReducer';

export const store = configureStore({
  reducer: {
    expense: ExpenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
