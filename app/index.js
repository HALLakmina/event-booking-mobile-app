import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from '../UseContext/AppContext';
import CustomBackground from '../components/CustomBackground';

const Index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <AppContext.Provider>
      <CustomBackground>
        {/* <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name='Login' 
            component={""}
          />
          <Stack.Screen 
            name='Registration' 
            component={""}
          />
          <Stack.Screen 
            name='Admin Login' 
            component={""}
          />
          <Stack.Screen 
            name='Home' 
            component={""}
          />
          <Stack.Screen 
            name='notFound' 
            component={""}
          />
        </Stack.Navigator> */}
      </CustomBackground>
    </AppContext.Provider>
  )
}

export default Index
