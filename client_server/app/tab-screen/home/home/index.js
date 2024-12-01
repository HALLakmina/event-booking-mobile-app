import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomBackground from '../../../../components/CustomBackground'
import HomeComponent from '../../../../components/HomeComponent'
import TextHeading from '../../../../components/TextHeading'
import SearchBar from '../../../../components/SearchBar'


const Home = ({navigation}) => {
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
    {
      id: 3,
      image: require("../../../../assets/images/event-images/live-music.jpg"),
      title: "CLUB >> LIVE MUSIC EVENT",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: 3,
        image: require("../../../../assets/images/event-images/live-music.jpg"),
        title: "CLUB >> LIVE MUSIC EVENT",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
  ];
  return (
    
    <CustomBackground>
        <ScrollView scrollEnabled={true}>
          <TextHeading>
            Select Event
          </TextHeading>
          <SearchBar/>
          <View style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
            {
              events.map((event, index) =>(
                <HomeComponent 
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  key={index}
                  onPress={()=>navigation.navigate('read-more-event')}
                />

              ))
            }
        </View>
        </ScrollView>
    </CustomBackground>
  )
}

export default Home

const styles = StyleSheet.create({})