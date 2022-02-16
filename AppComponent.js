import {Text, View} from 'react-native';
import React from 'react';

interface AppleComponentProps {
  // 苹果组件颜色属性
  apple_color: string;
  // 苹果组件重量属性
  apple_weight: number;
  // 苹果组件价格属性
  apple_price: number;
}

interface AppleComponentState {
  //是否改变颜色
  isChange: boolean;
  //苹果数量
  apple_num: number;
}
export default class AppleComponent extends React.Component<AppleComponentProps> {
  constructor(pros: any) {
    super(pros);
  }
  render() {
    // 什么颜色，由父亲(父组件)来定，当然也可以自己给自己定义一个默认的样子
    return (
      <View>
        <Text>我是一个 {this.props.apple_color} 的苹果</Text>
        <Text>我的重量是：{this.props.apple_weight}kg</Text>
        <Text>我的价格是：{this.props.apple_price}元</Text>
      </View>
    );
  }
}
