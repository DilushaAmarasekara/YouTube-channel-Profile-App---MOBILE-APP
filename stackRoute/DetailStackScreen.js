import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';

const DetailStack = createStackNavigator();

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'red',
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
            name="ellipsis-v"
            size={25}
            backgroundColor="black"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);

export default DetailStackScreen;
