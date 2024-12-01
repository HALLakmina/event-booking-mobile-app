import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import BookingTicket from './booking-ticket';
import Profile from './profile';
import MyTabBar from '../../components/MyTabBar';

const TabScreen = () => {
const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{headerShown:false}}
    >
        <Tab.Screen 
          name="home" 
          component={Home}
          options={{title: "Home"}}
        />
        <Tab.Screen
          name="booking-ticket"
          component={BookingTicket}
          options={{title: "Bookings"}}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{title: "Profile"}}
        />
    </Tab.Navigator>
  )
}

export default TabScreen