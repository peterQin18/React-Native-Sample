import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors} from './Colors';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.color_blue, marginTop: 10}}>Home Screen</Text>
      <View style={styles.buttonStyle}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonStyle: {
    marginTop: 16,
  }
});
export default HomeScreen;
