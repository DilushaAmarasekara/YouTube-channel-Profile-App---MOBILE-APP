import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const StackScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{backgroundColor: 'cornflowerblue'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Detail"
      component={DetailStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="info-circle" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="user-circle" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="cogs" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'cornflowerblue', 
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        title: 'HitTube-Detail',
        headerLeft: () => (
          <FontAwesome5
            style={styles.menu}
            name="bars"
            size={25}
            backgroundColor="black"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'cornflowerblue',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'HitTube - Home',
        headerLeft: () => (
          <FontAwesome5
            style={styles.menu}
            name="bars"
            size={25}
            backgroundColor="black"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const styles = StyleSheet.create({
  menu: {
    marginLeft: 15,
  },
});
export default StackScreen;
