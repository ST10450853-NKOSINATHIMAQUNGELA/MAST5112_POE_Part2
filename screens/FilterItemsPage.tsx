import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, FlatList, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../types';
import HomeScreen from './HomeScreen';

type FilterItemsScreenProps = NativeStackScreenProps<RootStackParamList, "FilterItems">;


export default function FilterItemsPage({navigation, route}: FilterItemsScreenProps){


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Filter Menu</Text>
            

            
                
            
        
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  });
  