import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  
} from "react-native";

import { PROFILES } from "../data/dummy-data/";


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
