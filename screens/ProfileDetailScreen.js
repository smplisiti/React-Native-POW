import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Profile Detail Screen!</Text>
            <Button title="Go to Sniff!" onPress={() => {
                props.navigation.navigate('Sniff');
            }} />

            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProfileDetailScreen;