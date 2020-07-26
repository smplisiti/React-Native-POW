import React from "react";
import { View, Text, Button, StyleSheet, } from "react-native";

import { PROFILES } from "../data/dummy-data";


const ProfileDetailScreen = (props) => {
  const profId = props.navigation.getParam("profileId");

  const selectedProfile = PROFILES.find((prof) => prof.id === profId);
  return (
    <View style={styles.screen}>
      <Text>The Profile Detail Screen!</Text>
      <Text>{selectedProfile.title}</Text>
      <Button
        title="Go to Sniff!"
        onPress={() => {
          props.navigation.navigate("Sniff");
        }}
      />

      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

ProfileDetailScreen.navigationOptions = (navigationData) => {
  const profId = navigationData.navigation.getParam("profileId");

  const selectedProfile = PROFILES.find((prof) => prof.id === profId);

  return {
    headerTitle: selectedProfile.title,
  }
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileDetailScreen;
