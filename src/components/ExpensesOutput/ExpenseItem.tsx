import {GlobalStyles} from '../../constants/Styles';
import {Expense} from '../../types/ExpenseTypes';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem = ({expense}: ExpenseItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const expensePressHandler = () => {
    navigation.navigate('ManageExpense');
  };

  return (
    <Pressable onPress={expensePressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {expense.getDescription()}
          </Text>
          <Text style={styles.textBase}>
            {expense.getDate().toDateString()}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${expense.getAmount().toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.secondary,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 100,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
