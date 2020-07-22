import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SniffScreen = props => {
    return (
        <View>
            <Text>The Sniff Screen!</Text>
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

export default SniffScreen;