import React, {Component} from 'react';
import { Text, StyleSheet, View } from "react-native";

export class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: 'Bird`s Nest',
      bodyText:
        'This is not really a bird nest. This is not really a bird nest. This is not really a bird nest. This is not really a bird nest.This is not really a bird nest.This is not really a bird nest. This is not really a bird nest.This is not really a bird nest. This is not really a bird nest. This is not really a bird nest. This is not really a bird nest.This is not really a bird nest.This is not really a bird nest. This is not really a bird nest.',
      ellipsText:
        '哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText哈哈,我是ellipsText',
    };
  }
  onPressTitle = () => {
    this.setState({titleText: 'Bird`s Nest [pressed]'});
  };
  render() {
    return (
      <View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={2} ellipsizeMode={'head'}>
            {this.state.bodyText}
          </Text>
        </Text>
        <Text numberOfLines={3} ellipsizeMode={'head'} selectable={true}>
          {this.state.ellipsText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
