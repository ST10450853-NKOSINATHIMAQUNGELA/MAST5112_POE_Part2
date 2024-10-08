import { StatusBar } from 'expo-status-bar';
import { lazy, useState } from 'react';
import { Button, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types'
import { useNavigation, useRoute} from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
const courses = ['Starters', 'Mains', 'desserts'];

type AddItemsScreenProps = NativeStackScreenProps<RootStackParamList, "AddItems">;
export default function AddItems ({navigation}: AddItemsScreenProps) {
    const [dishName, setDishName]= useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState(courses[0]);
    const [price, setPrice] = useState('');

    const handleSubmit = () =>{
        const newItem = {dishName, description, course, price: parseFloat(price)};
        navigation.navigate("Home", {newItem});
    };

    return(
        <View style={styles.container}>
            
            <Text style={styles.label}>Course:</Text>
            <Picker selectedValue={course} onValueChange={setCourse}>
                {courses.map((course) =>(
                    <Picker.Item key={course} label={course} value={course}/>
                ))}
            </Picker>
            <Text style={styles.label}>Dish Name:</Text>
            <TextInput style={styles.input} onChangeText={setDishName} value={dishName}/>

            <Text style={styles.label}>Description:</Text>
            <TextInput style={styles.input} onChangeText={setDescription} value={description}/>

            <Text style={styles.label}>Price:</Text>
            <TextInput style={styles.input} onChangeText={setPrice} value={price} keyboardType='numeric'/>
            
            <Button title='Add Items' onPress={handleSubmit}/>
        </View>
    );
 
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ccd8eb"
    },

    label: {
        fontSize: 20,
        marginVertical: 9,
    },

    input: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 18,
    }
})