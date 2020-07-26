import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ProfileScreen from "../screens/ProfileScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen";
import SniffScreen from "../screens/SniffScreen";
import HomeScreen from "../screens/HomeScreen";
import AboutUs from "../screens/AboutUs";
import Colors from "../constants/Colors";

const PowNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUs,
    Profiles: ProfileScreen,
    ProfileDetails: {
      screen: ProfileDetailScreen,
    },
    Sniff: SniffScreen,
  },
  {
      
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(PowNavigator);
