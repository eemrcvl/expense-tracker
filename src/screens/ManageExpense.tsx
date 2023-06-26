import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../App';
import IconButton from '../components/ui/IconButton';
import {GlobalStyles} from '../constants/styles';
import Button from '../components/ui/Button';
import {addExpense, deleteExpense} from '../store/redux/ExpenseReducer';
import {useDispatch} from 'react-redux';
import {v4 as uuid} from 'uuid';

type ManageExpenseScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ManageExpense'
>;

const ManageExpense: React.FC<ManageExpenseScreenProps> = props => {
  const dispatch = useDispatch();
  const expenseId = props.route.params?.expenseId;
  const isEditMode = !!expenseId;

  const nav = props.navigation;

  useLayoutEffect(() => {
    nav.setOptions({
      title: isEditMode ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditMode, nav]);

  function deleteExpenseHandler() {
    dispatch(deleteExpense({id: expenseId}));
    nav.goBack();
  }

  function cancelHandler() {
    nav.goBack();
  }

  function confirmHandler() {
    if (isEditMode) {
    } else {
      dispatch(
        addExpense({
          id: uuid(),
          description: 'sdsd',
          amount: 59,
          date: Math.floor(Date.now() / 1000),
        }),
      );
    }

    nav.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditMode ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditMode && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
