import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {RootStackParamList} from '../../App';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/redux';
import {getDateMinusDays} from '../util/date';

type RecentExpensesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RecentExpenses'
>;

const RecentExpenses: React.FC<RecentExpensesScreenProps> = () => {
  const expenses = useSelector((state: RootState) => state.expense);

  const recentExpenses = expenses.filter(expense => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    const expenseDate = new Date(expense.date * 1000); // unix timestamp
    return expenseDate > sevenDaysAgo && expenseDate <= today;
  });

  return (
    <ExpensesOutput periodName="Last 7 days" expenseList={recentExpenses} />
  );
};

export default RecentExpenses;
