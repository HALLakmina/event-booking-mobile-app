import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile =()=> {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = key => {
    if (expandedItems.includes(key)) {
      setExpandedItems(expandedItems.filter(item => item !== key));
    } else {
      setExpandedItems([...expandedItems, key]);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => handleToggle(item.key)}
        style={styles.listItem}
      >
        <Text style={styles.listText}>{item.title}</Text>
        <Ionicons
          name={
            expandedItems.includes(item.key) ? "chevron-up" : "chevron-down"
          }
          size={24}
          color="yellow"
        />
      </TouchableOpacity>
      {expandedItems.includes(item.key) && (
        <View style={styles.expandedContent}>
          <Text style={styles.expandedText}>{item.content}</Text>
        </View>
      )}
    </View>
  );

  const data = [
    {
      key: "email",
      title: "E-mail",
      content: "jonathon.williamsman@example.com",
    },
    { key: "phone", title: "Phone number", content: "+123 456 789" },
    { key: "address", title: "Address", content: "123 Main St, Springfield" },
  ];

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/profilePic.png")}
          style={styles.profileImage}
        />

        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>JONATHON WILLIANSMAN</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="yellow" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Expandable List */}
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={28} color="yellow" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={28} color="yellow" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ticket-outline" size={28} color="yellow" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={28} color="yellow" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: "yellow",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "yellow",
  },
  listText: {
    color: "white",
    fontSize: 16,
  },
  expandedContent: {
    backgroundColor: "#333",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  expandedText: {
    color: "white",
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#222",
    borderTopWidth: 1,
    borderColor: "yellow",
  },
});
