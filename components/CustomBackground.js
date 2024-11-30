import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const CustomBackground = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.screenSize} showsVerticalScrollIndicator={false} >
        {children}
      </ScrollView>
    </View>
  )
}

export default CustomBackground


const styles = StyleSheet.create({
  mainContainer: {
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight:"100vh",
    height:"100%",
    justifyContent: "center",
    backgroundColor:"#161619",
    color:"#ffffff"
  },
  screenSize:{
    maxWidth:"390px",
    width:"100%",
  }
})