import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SniffScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Sniff Screen!</Text>
            <Button title="Go Back to Profiles" onPress={() => {
                props.navigation.popToTop();
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

export default SniffScreen;