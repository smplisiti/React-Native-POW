import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import SniffScreen from '../screens/SniffScreen';

const PowNavigator = createStackNavigator({
    Profiles: ProfileScreen,
    ProfileDetails: {
        screen: ProfileDetailScreen
    },
    Sniff: SniffScreen
});

export default createAppContainer(PowNavigator);