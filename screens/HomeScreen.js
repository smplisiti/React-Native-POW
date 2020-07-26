import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = props => {
    return (
<View style={styles.screen}>
            <Text>PLENTY OF WOOF 🐶</Text>
            <Button title="Profiles" onPress={() => {
                props.navigation.navigate('Profiles');
            }} />

            <Button title="About Us" onPress={() => {
                props.navigation.navigate('About');
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

export default HomeScreen;