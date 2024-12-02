import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EventComponent from '../../../../components/EventComponent'
import CustomBackground from '../../../../components/CustomBackground'
import { getEventsById } from '../../../../APIS/EventApi'
import CustomButton from '../../../../components/CustomButton'
import { findUsers, usersBookingTickets } from '../../../../APIS/UsersApi'

const ReadMoreEvent = ({route}) => {
  const {id}= route.params
  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState({})
  useEffect(() =>{
    getSelectedEvents()
    getUser()
  },[])
  const getUser = async ()=>{
    try{
      const responds = await findUsers()
      setUserEvents(responds.data.bookingTickets);
    }catch(err){
      console.log(err)
    }
  }
  const getSelectedEvents =async ()=>{
    try{
      const responds = await getEventsById(id)
      setEvents(responds.data)
      console.log(responds.data);
      console.log("getEvents")
    }catch(err){
      console.log(err)
    }
  }
  const addEventHandler =async()=>{
    try{
      const selectedEvents = [...userEvents, id]
      const responds = await usersBookingTickets(selectedEvents)
      console.log(responds.data);
      console.log("getEvents")
    }catch(err){
      console.log(err)
    }
  }
  // const events = [
  //   {
  //     id: 1,
  //     image: require("../../../../assets/images/event-images/drink-week.jpg"),
  //     title: "DRINK WEEK >> WITH DJ EVENT",
  //     subTitle:"WEST OLYMPIC BOULEVARD",
  //     date:"FRI/ AUG 28/ 9.00 P.M",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
  //   },
  // ]
  return (
    <CustomBackground>
      <EventComponent
        // image={events[0].image}
        title={events.title} 
        subTitle={events.subTitle} 
        date={events.date}
        description={events.description}
      />
      <CustomButton title={"Booking Ticket"} type="primary" onPress={()=>addEventHandler()}/>
    </CustomBackground>
  )
}

export default ReadMoreEvent

const styles = StyleSheet.create({})