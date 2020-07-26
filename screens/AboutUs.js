import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUs = props => {
    return (
        <View style={styles.screen}>
            <Text>About Us!</Text>
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

export default AboutUs;