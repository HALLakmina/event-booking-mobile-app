import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EventComponent from '../../../../components/EventComponent'
import CustomBackground from '../../../../components/CustomBackground'

const ReadMoreEvent = () => {
  const events = [
    {
      id: 1,
      image: require("../../../../assets/images/event-images/drink-week.jpg"),
      title: "DRINK WEEK >> WITH DJ EVENT",
      subTitle:"WEST OLYMPIC BOULEVARD",
      date:"FRI/ AUG 28/ 9.00 P.M",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    },
  ]
  return (
    <CustomBackground>
      <EventComponent
        image={events[0].image} 
        title={events[0].title} 
        subTitle={events[0].subTitle} 
        date={events[0].date} 
        description={events[0].description}
      />
    </CustomBackground>
  )
}

export default ReadMoreEvent

const styles = StyleSheet.create({})