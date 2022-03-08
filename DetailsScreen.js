import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen </Text>
      <View style={{marginTop: 20}}>
        <Button
          title="Go to Widget Details"
          onPress={() => navigation.navigate('WidgetDetails')}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default DetailsScreen;
