import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../LoginScreen/SplashScreen';
import SignUpScreen from '../LoginScreen/SignUpScreen';
import SignInScreen from '../LoginScreen/SignInScreen';

const RootStack = createStackNavigator();

const LoginStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
  </RootStack.Navigator>
);

export default LoginStackScreen;
