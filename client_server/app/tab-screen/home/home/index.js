import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CustomBackground from '../../../../components/CustomBackground'
import HomeComponent from '../../../../components/HomeComponent'
import TextHeading from '../../../../components/TextHeading'
import SearchBar from '../../../../components/SearchBar'
import AppContext from '../../../../UseContext/AppContext'
import { getAllEvents } from '../../../../APIS/EventApi'


const Home = ({navigation}) => {
  const [events, setEvents] = useState([])
  useEffect(() =>{
    getEventList()
  },[])
  const getEventList = async()=>{
    try{
      const responds = await getAllEvents()
      setEvents(responds.data)
      console.log(responds.data);
    }catch(err){
      console.log(err)
    }
  }
  // const events = [
  //   {
  //     id: 1,
  //     image: require("../../../../assets/images/event-images/drink-week.jpg"),
  //     title: "DRINK WEEK >> WITH DJ EVENT",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 2,
  //     image: require("../../../../assets/images/event-images/fashion-show.jpg"),
  //     title: "STATEMENT >> FASHION SHOW",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   },
  //   {
  //     id: 3,
  //     image: require("../../../../assets/images/event-images/live-music.jpg"),
  //     title: "CLUB >> LIVE MUSIC EVENT",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     },
  //     {
  //       id: 3,
  //       image: require("../../../../assets/images/event-images/live-music.jpg"),
  //       title: "CLUB >> LIVE MUSIC EVENT",
  //       description:
  //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //       },
  // 
  // ];

  return (
    
    <CustomBackground>
        <ScrollView scrollEnabled={true}>
          <TextHeading>
            Select Event
          </TextHeading>
          <SearchBar/>
          <View style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
            {
              events ? events?.map((event, index) =>(
                <HomeComponent 
                  // image={event.image ? require(`../../../../assets/images/event-images/${event.image}`):require("../../../../assets/images/event-images/live-music.jpg")}
                  // image={""}
                  title={event.title}
                  description={event.description}
                  key={index}
                  onPress={()=>navigation.navigate('read-more-event', {id:event._id})}
                />
              )):''
            }
        </View>
        </ScrollView>
    </CustomBackground>
  )
}

export default Home

const styles = StyleSheet.create({})