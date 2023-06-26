import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ExpenseProps} from '../../types/expense';
import {GlobalStyles} from '../../constants/styles';

const ExpensesSummary = ({periodName, expenseList}: ExpenseProps) => {
  const expenseSum = expenseList.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
