import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress, type}) => {
  return (
    <TouchableOpacity 
        style={[styles.buttonContainer,
            type === 'primary' ? styles.primaryButtonPrimaryColor:undefined,
            type === 'secondary' ? styles.secondaryButtonColor:undefined,
            type === 'success' ? styles.primaryButtonSuccessColor:undefined,
            type === 'danger' ? styles.primaryButtonDangerColor:undefined,
        ]}
        onPress={onPress}
    >
        <Text 
            style={[
                styles.buttonTextStyle,
                type === 'secondary' ? styles.buttonSecondaryTextColor : styles.buttonPrimaryTextColor
            ]}
        >
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer:{
        padding:"20px",
        borderRadius:"20px",
        margin:"5px",
        width:"100%",
    },
    buttonTextStyle:{
        textAlign:"center",
        fontSize:"18px",
        fontWeight:"bold",
    },
    buttonPrimaryTextColor:{
        color:"#000000",
    },
    buttonSecondaryTextColor:{
        color:"#FFFFFF",
    },
    primaryButtonPrimaryColor:{
        backgroundColor:'#FCC300',
    },
    primaryButtonSuccessColor:{
        backgroundColor:'#75F94C',
    },
    primaryButtonDangerColor:{
        backgroundColor:'#8B1A10',
    },
    secondaryButtonColor:{
        border:"3px solid #FCC300",
    },
})