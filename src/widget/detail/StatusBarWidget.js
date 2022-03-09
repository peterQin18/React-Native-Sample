import React, {Component, useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';

const statusBarWidget = () => {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleSatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);
  const changeVisibilityStatusBar = () => {
    setVisibleSatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;
    console.log(styleId);
    if (styleId == styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>StatusBar Style: </Text>
        <Text style={styles.textStyle}>
          StatusBar Visibility: {!visibleStatusBar ? 'Visible' : 'Hidden'}
        </Text>
      </View>
      <StatusBar backgroundColor={'blue'} barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Toggle StatusBar'}
          onPress={() => changeVisibilityStatusBar()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Change StatusBar Style'}
          onPress={() => changeStyleStatusBar()}
        />
      </View>
    </View>
  );
};

export default statusBarWidget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  buttonContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
});
