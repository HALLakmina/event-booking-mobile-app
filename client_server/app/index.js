import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from '../UseContext/AppContext';
import CustomBackground from '../components/CustomBackground';
import Login from './login'
import Registration from './registration';
import TabScreen from './tab-screen';
import { getAllEvents } from '../APIS/EventApi';


const Index = () => {

  const Stack = createNativeStackNavigator();
  const [events, setEvents]=useState([])
  useEffect(() => {
    dispatchEvent("Get_Events")
    console.log("useEffect")
    return null;
  },[])

  const getEvents = async () =>{
    try{
      const responds = await getAllEvents()
      setEvents(responds.data)
      console.log(responds.data);
      console.log("getEvents")
    }catch(err){
      console.log(err)
    }
  }
  const dispatchEvent = (action,payload)=>{
    switch (action){
      case "Get_Events":
        getEvents()
        break;
      case"":
    }

  }

  return (
    <AppContext.Provider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name='login' 
            component={Login}
          />
           <Stack.Screen 
            name='registration' 
            component={Registration}
          />
          <Stack.Screen 
            name='tab-screen' 
            component={TabScreen}
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
