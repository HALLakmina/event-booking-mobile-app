import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBackground from '../../../../components/CustomBackground'
import EventTicket from '../../../../components/EventTicket'
import { getEventsById } from '../../../../APIS/EventApi'

const Ticket = ({route}) => {
  const {id}= route.params
  const [event, setEvents]= useState({})
  useEffect(()=>{
    getSelectedEvents()
  },[])

  const getSelectedEvents =async ()=>{
    try{
      const responds = await getEventsById(id)
      setEvents(responds.data)
      console.log(responds.data);
      console.log(responds.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <CustomBackground>
      <EventTicket
        // image={events[0].image}
        title={event.title} 
        subTitle={event.sub_title} 
        date={event.date_and_time}
        description={event.description}
      />
    </CustomBackground>
  )
}

export default Ticket

const styles = StyleSheet.create({})