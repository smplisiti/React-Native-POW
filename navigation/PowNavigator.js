import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import SniffScreen from '../screens/SniffScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUs from '../screens/AboutUs';

const PowNavigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutUs,
    Profiles: ProfileScreen,
    ProfileDetails: {
        screen: ProfileDetailScreen
    },
    Sniff: SniffScreen
});

export default createAppContainer(PowNavigator);