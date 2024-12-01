import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBackground from '../../../../components/CustomBackground'
import HomeComponent from '../../../../components/HomeComponent'
import TextHeading from '../../../../components/TextHeading'


const Booking = ({navigation}) => {
  const events = [
    {
      id: 1,
      image: require("../../../../assets/images/event-images/drink-week.jpg"),
      title: "DRINK WEEK >> WITH DJ EVENT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: require("../../../../assets/images/event-images/fashion-show.jpg"),
      title: "STATEMENT >> FASHION SHOW",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]
  return (
    <CustomBackground>
      <TextHeading>
        Booking
      </TextHeading>
      <View style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
            {
              events.map((event, index) =>(
                <HomeComponent 
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  key={index}
                  onPress={()=>navigation.navigate('ticket')}
                />

              ))
            }
        </View>
    </CustomBackground>
  )
}

export default Booking

const styles = StyleSheet.create({})