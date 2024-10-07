import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={MainScreen}/>
      </Stack.Navigator>
</NavigationContainer>
  );
};

function SplashScreen({navigation})
{
return(
<View style={styles.WelcomeText}>
      <Text style={styles.WelcomeText}>Menu App</Text>
      
      <Button title='Enter app'
          onPress={() => { 
            navigation.navigate("LoginScreen")
            console.log("Viewing menu")
          }}/>

      <StatusBar style="auto" />
    </View>
);
};

function isEmpty (value){
return(
  (value == null) 
)

}

function MainScreen(navigation){
  const[]
  return(
    <View>
    <Text style={styles.UserLogin}>Username</Text>
    <TextInput style={styles.userInfo} placeholder="Username"/>
    <Text style={styles.UserLogin}>Password</Text>
    <TextInput style={styles.userInfo} placeholder="Password"/>

    <Button title='Login'
      onPress={() => {
        if ((isEmpty(Username) ==false) && (isEmpty(Password) ==false))
        {
          navigation.navigate()
        }


      }
      }

    </View>
  )
}

const styles = StyleSheet.create({
 WelcomeText: {
  paddingTop: 190,
  color: "black",
  fontWeight: 'bold',
  fontSize: 45,
textAlign: 'center'
 }, 

 UserLogin: {
  paddingTop: 120,
  color: "black",
  fontWeight: "condensedBold",
  fontSize: 27,
  textAlign: "center"
 },

 userInfo: {
  paddingTop: 10,
  color: "black",
  fontWeight: "condensedBold",
  fontSize: 22,
  textAlign: "center",
  textDecorationLine: "underline"
 },

 MenuText: {
  paddingTop: 30,
  color: "black",
  fontWeight: "bold",
  fontSize: 30,
  textAlign: "left"
 },

 MenuCategory: {
  paddingTop: 20,
  color: "black",
  fontWeight: "condensedBold",
  fontSize: 25,
  textAlign: "left"
 },

 MenuItems: {
  paddingTop: 150,
  color: "black",
  fontWeight: "condensedBold",
  fontSize: 22,
  textAlign: "left"
 }
});

