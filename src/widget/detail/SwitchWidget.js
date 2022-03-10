import React, {Component, useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';

const SwitchWidget = () => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor={'#3e3e3e'}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  );
};

export default SwitchWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchStyle: {
    width: 50,
    height: 30,
    backgroundColor: '#ff0000',
  },
});
