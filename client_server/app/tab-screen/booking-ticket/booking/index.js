import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBackground from '../../../../components/CustomBackground'
import HomeComponent from '../../../../components/HomeComponent'
import TextHeading from '../../../../components/TextHeading'
import { findUsers } from '../../../../APIS/UsersApi'
import { getAllEvents } from '../../../../APIS/EventApi'


const Booking = ({navigation}) => {
  const [selectedEvents, setSelectedEvents] = useState([])
  const [events, setEvents]= useState([])
  useEffect(()=>{
    getBookingEvents()
    getEventList()
  },[])
  const getEventList = async ()=>{
    try{
      const responds = await getAllEvents()
      setEvents(responds.data)
      console.log(responds.data);
    }catch(err){
      console.log(err)
    }
  }
  const getBookingEvents = async() =>{
    try{
      const responds = await findUsers()
      setSelectedEvents(responds.data.bookingTickets)
      console.log(responds.data.bookingTickets);
    }catch(err){
      console.log(err)
    }
  }
  // const events = [
  //   {
  //     id: 1,
  //     image: require("../../../../assets/images/event-images/drink-week.jpg"),
  //     title: "DRINK WEEK >> WITH DJ EVENT",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 2,
  //     image: require("../../../../assets/images/event-images/fashion-show.jpg"),
  //     title: "STATEMENT >> FASHION SHOW",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  // ]
  return (
    <CustomBackground>
      <TextHeading>
        Booking
      </TextHeading>
      <View style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
            { 
              events.filter((data, indexEvent) =>{
                if (selectedEvents.filter((indexUserEvent)=>{
                  if(data._id === indexUserEvent){
                    return data._id;
                  }
                  return false;
                }).length>0){
                  console.log(data._id)
                  return data._id;}
              }).map((event, index) =>(
                <HomeComponent 
                  // image={event.image}
                  title={event.title}
                  description={event.description}
                  key={index}
                  onPress={()=>navigation.navigate('ticket',{id:event._id})}
                />
              ))
            }
        </View>
    </CustomBackground>
  )
}

export default Booking

const styles = StyleSheet.create({})