import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomBackground from '../../components/CustomBackground'
import TextHeading from '../../components/TextHeading'
import { Link } from '@react-navigation/native'

const LoginScreen = () => {
  return (
    <CustomBackground>
      <View style={styles.loginPageContainer}>
        <TextHeading>
          Login
        </TextHeading>
        <CustomInput placeholder={"name"}/>
        <CustomInput placeholder={"e-mail"}/>
        <Link to={{ screen: 'Registration'}} style={styles.forgetButton}>Forget Password ?</Link>
        <CustomButton title="Login" type="primary"/>
        <Text style={{fontSize:"18px", color:"white"}}>Don't have an account ? <Link to={{ screen: 'Registration'}}>Sign up</Link> </Text>
        <Text style={{fontSize:"18px",fontWeight:"bold", color:"white", marginVertical:"30px"}}>OR</Text>
        <View style={styles.imagesBox}>
          <Image source={require('../../assets/images/social-media/google.png')} style={styles.image}/>
          <Image source={require('../../assets/images/social-media/twitter.png')} style={styles.image}/>
          <Image source={require('../../assets/images/social-media/instagram.png')} style={styles.image}/>
        </View>
      </View>
    </CustomBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  loginPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth:"390px",
    width:"100%",
  },
  forgetButton: {
    marginBottom:"100px",
    textAlign:"right",
    alignSelf:"end",
    color:"white"  
  },
  imagesBox:{
    display: "flex",
    flexDirection: "row"
  },
  image:{
      margin:"10px",
      width:"30px",
      height:"30px",
  }
})