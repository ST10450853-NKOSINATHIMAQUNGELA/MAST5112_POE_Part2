import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import AddItems from './screens/AddItemsScreen';
import FilterItemsPage from './screens/FilterItemsPage';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="AddItems" component={AddItems}/>
        <Stack.Screen name="FilterItems" component={FilterItemsPage}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
</NavigationContainer>
  );
}

