import React from 'react';
import {StyleSheet, View} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {ExpenseProps} from '../../types/expense';
import {GlobalStyles} from '../../constants/styles';

const ExpensesOutput = ({expenseList, periodName}: ExpenseProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenseList={expenseList} />
      <ExpensesList expensesList={expenseList} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
