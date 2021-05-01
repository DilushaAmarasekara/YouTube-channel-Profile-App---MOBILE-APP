import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text style={styles.HeaderText}>User Profile</Text>
      <Image source={require('../Images/me.jpg')} style={styles.ImageHome} />
      <Text style={styles.bodyText}>
        Name : Dilusha Amarasekara {'\n\n'}
        Profession : Owner of Usha Production {'\n\n'}
        Country : Sri lanka {'\n\n'}
        Email : diluchamo.c@gmail.com {'\n'}
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  HeaderText: {
    color: 'black',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  bodyText: {
    fontSize: 22,
    marginTop: 5,
    marginLeft: 15,
    alignItems: 'baseline',
    fontWeight: 'bold',
  },
  ImageHome: {
    width: 230,
    height: 280,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 10,
  },
});
