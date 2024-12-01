import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextHeading = ({children}) => {
  return (
    <Text style={styles.headingStyle}>{children}</Text>
  )
}

export default TextHeading

const styles = StyleSheet.create({
    headingStyle:{
        fontSize:"35px",
        fontFamily:"Calibri",
        fontWeight:"bold",
        textAlign:"center",
        marginBlock:"50px",
        color:"white"
    }
})