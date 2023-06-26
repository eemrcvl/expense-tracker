/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from './src/screens/AllExpenses';
import {GlobalStyles} from './src/constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './src/components/ui/IconButton';
import {Provider} from 'react-redux';
import {store} from './src/store/redux';
import 'react-native-get-random-values';

export type RootStackParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
  ManageExpense: {expenseId: string};
  ExpensesOverview: undefined;
};

export type RootBottomTabParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<RootBottomTabParamList>();

interface TabBarIconProps {
  color: string;
  size: number;
}

function ExpensesOverview(): JSX.Element {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: 'white',
        headerRight: ({tintColor}) => (
          <IconButton
            iconName="plus"
            size={20}
            color={tintColor as string}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent Expenses',
          tabBarIcon: ({color, size}: TabBarIconProps) => (
            <Icon name="hourglass" color={color} size={size} />
          ),
        }}></BottomTabs.Screen>
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}: TabBarIconProps) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}
function App(): JSX.Element {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}></Stack.Screen>
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{presentation: 'modal'}}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
