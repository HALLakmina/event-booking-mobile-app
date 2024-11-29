import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomeComponent = ({ image, title, description }) => {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventImageContainer}>
        <Image source={image} style={styles.eventImage} />
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDescription}>{description}</Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>READ MORE →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#222",
    borderRadius: 10,
    overflow: "hidden",
  },
  eventImageContainer: {
    flex: 1,
  },
  eventImage: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
  eventContent: {
    flex: 2,
    padding: 10,
  },
  eventTitle: {
    color: "yellow",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  eventDescription: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "100",
  },
  readMore: {
    color: "yellow",
    fontWeight: "100",
  },
});

export default HomeComponent;
