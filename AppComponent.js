import {Text, View} from 'react-native';
import React from 'react';

interface AppleComponentProps {
  // 苹果组件颜色属性
  apple_color: string;
}
export default class AppleComponent extends React.Component<AppleComponentProps> {
  constructor(pros: any) {
    super(pros);
  }
  render() {
    // 什么颜色，由父亲(父组件)来定，当然也可以自己给自己定义一个默认的样子
    return (
      <View>
        <Text>我是一个{this.props.apple_color}的苹果</Text>
      </View>
    );
  }
}
