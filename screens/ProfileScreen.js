import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { PROFILES } from "../data/dummy-data/";
import CategoryGridTile from "../components/CategoryGridTile";

const ProfileScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ProfileDetails",
            params: {
              profileId: itemData.item.id
            },
          });
        }}
      />
    )
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
});

export default ProfileScreen;
