import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Index</Text>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    mainHeading:{
        margin:"10px",
        fontSize:"30px",
        fontWeight: "bold",
        fontFamily:"calibri"
    }
})