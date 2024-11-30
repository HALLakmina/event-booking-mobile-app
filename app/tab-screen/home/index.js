import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './home';
import ReadMoreEvent from './read-more-event';

const HomeStack = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name='home' 
            component={Home}
          />
          <Stack.Screen 
            name='read-more-event' 
            component={ReadMoreEvent}
          />
      </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})