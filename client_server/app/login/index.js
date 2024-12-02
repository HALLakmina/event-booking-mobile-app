import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomBackground from '../../components/CustomBackground'
import TextHeading from '../../components/TextHeading'
import { fetchUsers } from '../../APIS/UsersApi'
import Cookies from 'universal-cookie'

const responseMessages = require('../../util/responseMessages')

const Login = ({navigation}) => {
  const loginUserData ={email:"", password:""}
  const [loginUser, setLoginUser] = useState(loginUserData)

  const inputHandler =(e, name)=>{
    const {value} = e.target
    const keyIsExist = loginUserData.hasOwnProperty(name)
    console.log(keyIsExist, loginUser)
    if(keyIsExist){
      let obj ={}
      obj[name] = value
      setLoginUser({...loginUser, ...obj})
    }
  }

  const submitHandler = async ()=>{
    console.log("Submit",loginUser)
    try{
      const response = await fetchUsers(loginUser)              
      const token = response.data
      const status = response.statusText    
      const cookies = new Cookies();
      cookies.set('JWT_TOKEN', token, {maxAge:36000});  
      navigation.navigate('tab-screen')
    }catch(err){
      let message = err?.message;
      const response = err.response;    
      if(response && (response.status === 400) ){
          const data = response.data                
          message = responseMessages.user.notFound || data.message;          
          if(Array.isArray(data) && data.length){                
              message = data.reduce((pre, cur) => `${pre} | ${cur.message}`, '')                                                          
          }                
      }else if(response && (response.status === 404) ){                
          message = responseMessages.user.notFound;          
      }else if(response && response.status === 500){                                   
          message = responseMessages.error[500] || response.data;          
      }
      // setApiError(true)
      // setMessage(message)
  } 
  }

  return (
    <CustomBackground>
      <View style={styles.loginPageContainer}>
        <TextHeading>
          Login
        </TextHeading>
        <CustomInput placeholder={"e-mail"} onChange={(e)=>inputHandler(e,"email")}/>
        <CustomInput placeholder={"password"} onChange={(e)=>inputHandler(e,"password")} secureTextEntry={true}/>

        <TouchableOpacity onPress={()=>navigation.navigate('')} style={{width: '100%'}}><Text style={styles.forgetButton}>Forget Password ?</Text></TouchableOpacity>
        <CustomButton title="Login" type="primary" onPress={()=>submitHandler()}/>
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