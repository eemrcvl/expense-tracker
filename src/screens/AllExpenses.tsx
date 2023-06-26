import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {RootStackParamList} from '../../App';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/redux';

type AllExpensesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AllExpenses'
>;

const AllExpenses: React.FC<AllExpensesScreenProps> = props => {
  const expenses = useSelector((state: RootState) => state.expense);

  return <ExpensesOutput periodName="All Expenses" expenseList={expenses} />;
};

export default AllExpenses;
