import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBackground from '../../../../components/CustomBackground'
import EventTicket from '../../../../components/EventTicket'

const Ticket = () => {
  return (
    <CustomBackground>
      <EventTicket/>
    </CustomBackground>
  )
}

export default Ticket

const styles = StyleSheet.create({})