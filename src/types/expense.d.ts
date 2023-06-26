export interface ExpenseProps {
  expenseList: Expense[];
  periodName: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: number;
}
