import React from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo, Text} from 'react-native';
import {Expense} from '../../types/ExpenseTypes';
import ExpenseItem from './ExpenseItem';

type ExpensesListProps = {
  expensesList: Expense[];
};

const renderExpenseItem = (itemData: ListRenderItemInfo<Expense>) => {
  return <ExpenseItem expense={itemData.item}></ExpenseItem>;
};

const ExpensesList = ({expensesList}: ExpensesListProps) => {
  return (
    <FlatList
      data={expensesList}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.getId()}
    />
  );
};

export default ExpensesList;
