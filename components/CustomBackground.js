import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomBackground = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.screenSize}>
        {children}
      </View>
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