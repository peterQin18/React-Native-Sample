/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppleComponent from './AppComponent';
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

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [state, setState] = useState(true);
  return (
    <View>
      <TextInput
        style={{
          padding: 10,
          height: 40,
          width: 400,
          backgroundColor: '#f00f80',
        }}
        placeholder="Type here to translate!"
        onChangeText={text => {
          setText(text);
          // console.log(text.split(' ').map(world => world));
        }}
        defaultValue={text}
      />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{padding: 10, fontSize: 40}}>
        {text
          .split(' ')
          .map(world => world && '🍕')
          .join('')}
      </Text>
    </View>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{margin: 10, flex: 1, backgroundColor: '#ffffff'}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => {
            console.log(value);
            setSelectedValue(value);
            console.log(selectedValue);
          }}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={(styles.container, {[label]: selectedValue})}>{children}</View>
  </View>
);

const FlexDirectionBasics = () => {
  const [flexDirection, setFlexDirection] = useState('column');
  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  test: {
    fontSize: 16,
    color: '#ff0000',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#456792',
    borderWidth: 1,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#00ff00',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    color: '#67980d',
  },
});
class Square extends React.Component {
  render() {
    return <button className="square">{this.props.valueOf}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div children="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default class App extends Component<Props> {
  render(): React$Node {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [color, setColor] = useState('红色');
    const name = '文本';
    return (
      <View>
        <AppleComponent apple_color="绿色" />
        <Text
          style={{marginTop: 20}}
          onPress={() => {
            console.log('点击了');
          }}>
          {name}
        </Text>
      </View>
    );
  }
}

// export default FlexDirectionBasics;
