import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

import { PROFILES } from "../data/dummy-data/";
import Colors from "../constants/Colors";

const ProfileScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "ProfileDetails",
            params: {
              profileId: itemData.item.id,
            },
          });
        }}
      >
        <View style={styles.gridItem}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={PROFILES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

ProfileScreen.navigationOptions = {
  headerTitle: "Client Profiles",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default ProfileScreen;
