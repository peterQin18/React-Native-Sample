import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';

const WidgetDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Modal');
        }}>
        <Text style={styles.textStyle}>Modal 组件</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('KeyboardAvoiding');
        }}>
        <Text style={styles.textStyle}> KeyboardAvoidingView 组件</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    backgroundColor: '#0070ff',
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#ff0000',
    shadowOpacity: 0.25,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
  },
});

export default WidgetDetails;
