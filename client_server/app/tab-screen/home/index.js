import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './home';
import ReadMoreEvent from './read-more-event';

const HomeStack = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
          <Stack.Screen 
            name='home' 
            component={Home}
            options={{title: ''}}
          />
          <Stack.Screen 
            name='read-more-event' 
            component={ReadMoreEvent}
            options={{title: 'Event'}}
          />
      </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})