import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

const CustomInput = ({placeholder, onChange}) => {
  return (
    <TextInput placeholder={placeholder} onChange={onChange} style={styles.Inputfield}/>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    Inputfield:{
        backgroundColor:"#E8E8E8",
        borderRadius:"20px",
        padding:"20px",
        margin:"5px",
        width:"100%",
        height:"54px",
    }
})