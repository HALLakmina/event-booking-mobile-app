import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Ticket from '../app/tab-screen/booking-ticket/ticket'
import CustomBackground from './CustomBackground'

const EventTicket = () => {
  return (
    <View style={styles.ticketContainer}>
      <Image source={require('../assets/images/tickets/ticket-01.png')} style={styles.ticketImage}/>
      <View style={styles.detailsBox}>
        <Text style={styles.title}>{"DRINK WEEK >> WITH DJ EVENT"}</Text>
        <View>
            <Text style={styles.topic}>Name</Text>
            <Text style={styles.description}>JONATHON WILLIANSMAN</Text>
        </View>
        <View>
            <Text style={styles.topic}>Date</Text>
            <Text style={styles.description}>{"SAT / JUNE 25 / 5:00PM"}</Text>
        </View>
        <View>
            <Text style={styles.topic}>Place</Text>
            <Text style={styles.description}>{"NEW YORK CITY"}</Text>
        </View>
      </View>
    </View>
  )
}

export default EventTicket

const styles = StyleSheet.create({
    ticketContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:"10px"
    },
    ticketImage: {
        width:"200px",
        height:"300px",
        borderRadius:"10px",
    },
    detailsBox:{
        border:"1px solid lightGray",
        padding:"20px",
        borderRadius:"10px"
    },
    title:{
        fontSize:"20px",
        fontWeight:"bold",
        color:"white",
    },
    topic:{
        fontSize:"18px",
        fontWeight:"bold",
        color:"white",
    },
    description:{
        fontSize:"16px",
        color:"white",
    }
})