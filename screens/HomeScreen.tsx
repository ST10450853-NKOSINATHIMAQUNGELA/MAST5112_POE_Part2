import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import AddItems from './AddItemsScreen';
import React from 'react';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">

export default function HomeScreen({navigation, route}: HomeScreenProps){
    const [menuItems, setMenuItems] = useState<{dishName: string, description: String, course: String, price: Number}[]>([]);
    
    useEffect(() =>{
        if (route.params?.newItem){
            setMenuItems((prevItems)=> 
                [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number}])
        }
        
    }, 
    [route.params?.newItem]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Chef's menu</Text>
            
             <Text> Total Items: {menuItems.length}</Text>   

             <FlatList
             data={menuItems}
             keyExtractor={(item, index) => index.toString()}
             renderItem={({item}) =>(
                <View style={styles.menuBorder}>
                    <Text style={styles.menuItem}> {item.dishName} - {item.course} </Text>
                    <Text style={styles.menuItem}> {item.description} </Text>
                    <Text style={styles.menuItem}> ${item.price.toFixed(2)}</Text>

                </View>

                
             )}/>

             <Button title='Add menu' onPress={() => navigation.navigate("AddItems")}/>
            <Button title='Filter menu' onPress={() => navigation.navigate("FilterItems") }/>

      
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: "#ccd8eb"
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
    },
    menuBorder: {
        borderBottomWidth: 3,
      paddingVertical: 10,
    },

    menuItem: {
      
      fontSize: 15,
    },
  });