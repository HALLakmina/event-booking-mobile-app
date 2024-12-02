import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";


const EventComponent = ({ image, title, subTitle, date, description }) => {
  return (
    <View style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", marginBottom:"30px"}}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.posterImage} resizeMode="cover" />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
        <Text style={styles.subtitle}>{date}</Text>

        {/* About Section */}
        <Text style={styles.sectionHeader}>ABOUT</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default EventComponent;

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
        marginVertical: 10,
      },
      posterImage: {
        width: "304px",
        height: "453px",
        borderRadius: "20px",
      },
      detailsContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        width: "300px",
      },
      title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      subtitle: {
        color: "white",
        fontSize: 14,
        marginBottom: 5,
      },
      sectionHeader: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
      },
      description: {
        color: "white",
        fontSize: 14,
        lineHeight: 20,
      },
});
