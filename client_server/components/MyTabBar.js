import { View, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { Ionicons } from "@expo/vector-icons";

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const icons ={
    Home:(props=any)=>(props.isFocused ? <Ionicons name="home-sharp" size={28} color="#FCC300" {...props}/>:<Ionicons name="home-outline" size={28} color="#FCC300" {...props}/>),
    Bookings:(props=any)=>props.isFocused ? <Ionicons name="heart" size={28} color="#FCC300" {...props}/>:<Ionicons name="heart-outline" size={28} color="#FCC300" {...props}/>,
    Profile:(props=any)=>props.isFocused ? <Ionicons name="person" size={28} color="#FCC300" {...props}/>:<Ionicons name="person-outline" size={28} color="#FCC300" {...props}/>,
  }
  return (
    <View style={styles.myTabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            {icons[options.title]({isFocused})}
            {/* <Text style={{ color:"#FCC300", textAlign: 'center', fontWeight: 'bold' }}>
              {label}
            </Text> */}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default MyTabBar

const styles = StyleSheet.create({
    myTabBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:"40px",
        width:"100%"
    },
    tabButton:{
      flex:1,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }
  })
