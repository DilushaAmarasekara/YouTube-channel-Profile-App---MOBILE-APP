import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'ligh-content' : 'dark-content'} />
        <Text style={styles.HeaderText}>Welcome To HitTube Platform</Text>

        <Text style={styles.bodyText}>
          This is the new YouTube channel of Sri lanka. It comprise with
          trending videos in the world.
          <Text> </Text>
          <Text>
            Trending Sports(Cricket,Football,..etc), Music, Fun, Cooking,
            Eductional videos are uploaded that youTube channel.
          </Text>
          {'  '}
          If you like this youTube channel please subscribe my channel and
          watching videos.
        </Text>

        <Image
          source={require('../Images/Home.png')}
          style={styles.ImageHome}
        />
        <Image
          source={require('../Images/usha.png')}
          style={styles.ImageUsha}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'white',
  },
  HeaderText: {
    color: 'black',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  bodyText: {
    fontSize: 22,
    marginTop: 5,
    marginLeft: 15,
    alignItems: 'baseline',
  },
  ImageHome: {
    width: 400,
    height: 150,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
  },
  ImageUsha: {
    width: 390,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
  },
});
