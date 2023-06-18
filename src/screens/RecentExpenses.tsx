import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {Expense} from '../types/ExpenseTypes';

const DUMMY_EXPENSES = [
  new Expense('e1', 'Shoes', 59.99, new Date('2023-06-18')),
  new Expense('e2', 'Trousers', 60.99, new Date('2023-06-17')),
  new Expense('e3', 'Bananas', 5.99, new Date('2023-05-15')),
];

const RecentExpenses = () => {
  return (
    <ExpensesOutput periodName="Last 7 days" expenseList={DUMMY_EXPENSES} />
  );
};

export default RecentExpenses;
