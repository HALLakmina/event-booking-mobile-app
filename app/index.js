import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from '../UseContext/AppContext';
import CustomBackground from '../components/CustomBackground';
import Login from './login'
import Registration from './registration';
import TabScreen from './tab-screen';


const Index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <AppContext.Provider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name='tab-screen' 
            component={TabScreen}
          />
          <Stack.Screen 
            name='login' 
            component={Login}
          />
           <Stack.Screen 
            name='registration' 
            component={Registration}
          />
          {/*<Stack.Screen 
            name='Home' 
            component={""}
          />
          <Stack.Screen 
            name='notFound' 
            component={""}
          /> */}
        </Stack.Navigator>
    </AppContext.Provider>
  )
}

export default Index
