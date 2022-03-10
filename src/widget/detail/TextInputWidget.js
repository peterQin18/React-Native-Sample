import React, {Component} from 'react';
import {TextInput, View} from 'react-native';

function UselessTextInput(props) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        paddingStart: 10,
      }}>
      <TextInput
        {...props} //将父组件传递来得所有props 传递给TextInput;比如下面的 multiline 和  numberOfLines
        editable={true}
        maxLength={40}
        autoFocus={true}
        underlineColorAndroid={'transparent'}
        placeholder={props.value}
      />
    </View>
  );
}

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return (
    <View
      style={{
        backgroundColor: value,
      }}>
      <UselessTextInput
        editable={false}
        numberOfLine={4}
        onChangeText={text => {
          console.log(text);
          onChangeText(text);
        }}
        value={value}
      />
    </View>
  );
}
