import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Setting Screen </Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
