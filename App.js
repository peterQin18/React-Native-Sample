/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Image, Text, TextInput, View, Button} from 'react-native';
const Cat = props => {
  // const name = 'xiaoming';
  return (
    <View>
      <Text>Hello,I am {props.name}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginHorizontal: 10,
          marginTop: 10,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Cat name="xiaopeng" />
      <Cat name="xiaofei" />
      <Cat name="kiki" />
      <Cat name="solo  hello" />
    </View>
  );
};
const CatApp = () => {
  return (
    <View style={{}}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Hello I am your cat!</Text>
    </View>
  );
};
// export default CatApp;

// State 状态
const MyCat = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name} and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk,Please!' : 'Thank you!'}
      />
    </View>
  );
};

const MyCafe = () => {
  return (
    <>
      <MyCat name="Munkustrap" />
      <MyCat name="Spot" />
    </>
  );
};

export default MyCafe;
