import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomeComponent = ({ image, title, description, key, onPress  }) => {
  return (
    <View style={styles.eventCard} key={key}>
      <View style={styles.eventImageContainer}>
        <Image source={image} style={styles.eventImage} />
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDescription}>{description}</Text>
        <TouchableOpacity>
          <TouchableOpacity onPress={onPress}style={styles.readMore}>READ MORE →</TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: "#161619",
    border:"3px solid #FCC300",
    borderRadius: 10,
    width:"280px",
    height:"200px"
  },
  eventImageContainer: {
    width:"144px",
    height:"193px",
    borderRadius: 10,
  },
  eventImage: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  eventContent: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    padding: 10,
  },
  eventTitle: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  eventDescription: {
    color: "white",
    fontSize: 5,
    marginBottom: 10,
    fontWeight: "100",
  },
  readMore: {
    color: "white",
    fontWeight: "100",
    fontSize: 10,
  },
});

export default HomeComponent;
