import { StyleSheet, Text, TouchableOpacity, View, Image, Linking } from 'react-native'
import React, { useState } from 'react'
import CustomBackground from '../../components/CustomBackground'
import TextHeading from '../../components/TextHeading'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { createUsers } from '../../APIS/UsersApi'

const responseMessages = require('../../util/responseMessages')
const Registration = ({navigation}) => {

  const newUserDetails={name:"",email:"",password:"",conformPassword:""}
  const [newUser, setNewUser] = useState(newUserDetails)

  const inputHandler = (e, name)=>{
    const {value} = e.target
    const keyIsExist = newUserDetails.hasOwnProperty(name)
    if(keyIsExist){
      let obj={}
      obj[name] = value
      setNewUser({...newUser, ...obj})
    }
  }
  const submitHandler = async()=>{
    try{
      if(newUser.password === newUser.conformPassword){
        const response = await createUsers({name:newUser.name, email:newUser.email, password:newUser.password})
        const {message} = response.data
        // dispatchEvent('SET_LOGIN_USER_TO_COOKIES', token )
        navigation.navigate('login')
      }
    }catch(error){
      let takeMessage = error?.message
      const response = error?.response
      console.log(error)
      if(response){
        const {status, data} = response
        const message = data?.message
        if(response && status === 400){
            const message = data[0]?.message
            takeMessage = message || responseMessages.error[400]
        }
        else if(response && status === 409){
            takeMessage = message || responseMessages.error[409](responseMessages.type.event)
        }
        else if(response && status === 500){
            takeMessage = message || responseMessages.error[500]
        }
      }

    }
  }
  return (
    <CustomBackground>
      <TextHeading>Registration</TextHeading>
      <CustomInput placeholder={"name"} onChange={(e)=>inputHandler(e,"name")}/>
      <CustomInput placeholder={"e-mail"} onChange={(e)=>inputHandler(e,"email")}/>
      <CustomInput placeholder={"password"} secureTextEntry={true} onChange={(e)=>inputHandler(e,"password")}/>
      <CustomInput placeholder={"conform password"} secureTextEntry={true}  onChange={(e)=>inputHandler(e,"conformPassword")}/>
      <Text style={{fontSize:"18px", color:"white", textAlign:"center", marginBottom:"50px", marginTop:"10px"}}>I have an account ? <TouchableOpacity onPress={()=>navigation.navigate('login')} style={{color:"#007AFF",textDecorationLine: 'underline'}}>Sign In</TouchableOpacity> </Text>
      <CustomButton title={"Get Start"} type={"primary"} onPress={()=>submitHandler()}/>
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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

export default Registration

const styles = StyleSheet.create({
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