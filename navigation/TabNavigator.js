import React from 'react'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Matches from '../screens/Matches'
import { createMaterialTopTabNavigator } from 'react-navigation'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

// export default createMaterialBottomTabNavigator({
//     Profile: { screen: Profile },
//     Home: { screen: Home },
//     Matches: { screen: Matches }
//   }, {
//     initialRouteName: 'Home',
//     activeTintColor: '#f0edf6',
//     inactiveTintColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad' },
//   });

export default createMaterialTopTabNavigator( {
    Profile: {screen: Profile,
    navigationOptions: {
        tabBarLabel: 'Profile',
        // tabBarIcon: ({tintColor}) => (
        //     <Icon name='ios-person' color={tintColor} size={24} />
        // )
    }},
    Home: {screen: Home, navigationOptions: {
        tabBarLabel: 'Home',
        // tabBarIcon: ({tintColor}) => (
        //     <Icon name='ios-home' color={tintColor} size={24} />
        // )
    }},
    Matches: {screen: Matches,
    navigationOptions: {
        tabBarLabel: 'Matches',
        // tabBarIcon: ({tintColor}) => (
        //     <Icon name='ios-leaf' color={tintColor} size={24} />
        // )
    }}
}, {
    animationEnabled: true,
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    order: ['Profile', 'Home', 'Matches'],
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: '#ea4452',
        inactiveTintColor: 'black',
        
        style: {
            backgroundColor: '#fff'
        }
    },
    navigationOptions: {
        swipeEnabled: true
    }
});
  