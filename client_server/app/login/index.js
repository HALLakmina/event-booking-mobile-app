import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomBackground from '../../components/CustomBackground'
import TextHeading from '../../components/TextHeading'

const Login = ({navigation}) => {
  return (
    <CustomBackground>
      <View style={styles.loginPageContainer}>
        <TextHeading>
          Login
        </TextHeading>
        <CustomInput placeholder={"name"}/>
        <CustomInput placeholder={"e-mail"}/>
        <TouchableOpacity onPress={()=>navigation.navigate('')} style={{width: '100%'}}><Text style={styles.forgetButton}>Forget Password ?</Text></TouchableOpacity>
        <CustomButton title="Login" type="primary"/>
        <Text style={{fontSize:"18px", color:"white"}}>Don't have an account ? <TouchableOpacity onPress={()=>navigation.navigate('registration')} style={{color:"#007AFF",textDecorationLine: 'underline'}}>Sign up</TouchableOpacity> </Text>
        <Text style={{fontSize:"18px",fontWeight:"bold", color:"white", marginVertical:"30px"}}>OR</Text>
        <View style={styles.imagesBox}>
          <TouchableOpacity onPress={() => Linking.openURL('https://accounts.google.com/v3/signin/identifier?flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en-GB&ifkv=AcMMx-eZY_Rf5xrkNbx3r34ddiR73_79Ac8O5_tSeLMD9W9aAcjFS3rSrmEGKstYNc18FGKs7tTZtA&dsh=S-2112245626%3A1732781437560785&ddm=1')} >
            <Image source={require('../../assets/images/social-media/google.png')} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/i/flow/login')} >
            <Image source={require('../../assets/images/social-media/twitter.png')} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/accounts/login')} >
            <Image source={require('../../assets/images/social-media/instagram.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View>
    </CustomBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  loginPageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  forgetButton: {
    marginBottom:"100px",
    textAlign:"right",
    alignSelf:"end",
    color:"white",
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