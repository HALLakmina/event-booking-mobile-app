import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Ticket from './ticket';
import Booking from './booking';

const BookingStack = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
          <Stack.Screen 
            name='booking' 
            component={Booking}
            options={{title: ''}}
          />
          <Stack.Screen 
            name='ticket' 
            component={Ticket}
            options={{title: 'Ticket'}}
          />
      </Stack.Navigator>
  )
}

export default BookingStack

const styles = StyleSheet.create({})