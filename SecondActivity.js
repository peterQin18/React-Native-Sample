// 20220217 task: 跳转新页面，验证三元表达式

import {Component} from 'react';
import {Text, View} from 'react-native';

class SecondActivity extends Component {
  static navigationOptions = {
    title: 'second',
  };
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>第二个页面</Text>
      </View>
    );
  }
}

export default SecondActivity;
