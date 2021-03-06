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
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import AppleComponent from './AppComponent';
// import {Colors} from './Colors';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactFabric-prod';
import {createAppContainer, StackNavigator} from 'react-navigation';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

// import DetailsScreen from './DetailsScreen';
// import SecondActivity from './SecondActivity';
// import Home from './HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ModalScreen from './src/widget/detail/ModalScreen';
import WidgetDetails from './src/widget/WidgetDetails';
import KeyboardAvoiding from './KeyboardAvoiding';
import PressableWidget from './src/widget/detail/PressableWidget';
import RefreshControlWidget from './src/widget/detail/RefreshControlWidget';
import ScrollViewWidget from './src/widget/detail/ScrollViewWidget';
import {sectionListWidget} from './src/widget/detail/SectionListWidget';
import StatusBarWidget from './src/widget/detail/StatusBarWidget';
import SwitchWidget from './src/widget/detail/SwitchWidget';
import {TextInANest} from './src/widget/detail/TextWidget';
import UselessTextInputMultiline from './src/widget/detail/TextInputWidget';
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

// State ??????
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
          .map(world => world && '????')
          .join('')}
      </Text>
    </View>
  );
};

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{margin: 10, flex: 1, backgroundColor: '#ffffff'}}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => {
//             console.log(value);
//             setSelectedValue(value);
//             console.log(selectedValue);
//           }}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={(styles.container, {[label]: selectedValue})}>{children}</View>
//   </View>
// );
//
// const FlexDirectionBasics = () => {
//   const [flexDirection, setFlexDirection] = useState('column');
//   return (
//     <PreviewLayout
//       label="flexDirection"
//       values={['column', 'row', 'row-reverse', 'column-reverse']}
//       selectedValue={flexDirection}
//       setSelectedValue={setFlexDirection}>
//       {/* eslint-disable-next-line react-native/no-inline-styles */}
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//     </PreviewLayout>
//   );
// };

const stylesNormal = StyleSheet.create({
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
// export default class App extends Component<Props> {
//   render(): React$Node {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     // const [color, setColor] = useState('??????');
//     const name = '??????';
//     let params = {apple_color: '??????', apple_price: 9.9, apple_weight: 1.8};
//     let {apple_color, apple_weight} = params;
//     return (
//       <View>
//         <AppleComponent
//           apple_color={apple_color}
//           apple_weight={apple_weight}
//           apple_price={9.9}
//         />
//         <Text
//           style={{marginTop: 20}}
//           onPress={() => {
//             console.log('?????????');
//           }}>
//           {name}
//         </Text>
//       </View>
//     );
//   }
// }
// export default FlexDirectionBasics;

// JavaScript??????????????????????????????&&??????????????????????????????&&??????????????????false???????????????????????????????????????????????????????????????
let flag = true;
const element = () => {
  return (
    <View style={buttonStyles.row}>
      {flag && <Text>??????box?????? </Text>}
      {!flag && <Text>??????fox??????</Text>}
      {getTarget()}
      <Text style={{fontSize: 20, color: '#d99800', width: 300, height: 40}}>
        Hao de
      </Text>
      <Button
        title="button"
        onPress={() => {
          Alert.alert('??????????????????');
        }}
      />
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

function getTarget() {
  if (flag) {
    return <Text> ??????</Text>;
  } else {
    return <Text>??????</Text>;
  }
}

// export default class ButtonBasic extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!');
//   }
//   render() {
//     return (
//       <View style={buttonStyles.container}>
//         <View style={buttonStyles.buttonContainer}>
//           <Button title="Press Me" onPress={this._onPressButton} />
//         </View>
//         <View style={buttonStyles.buttonContainer}>
//           <Button
//             title="Press me"
//             onPress={this._onPressButton}
//             color="#841584"
//           />
//         </View>
//         <View style={buttonStyles.alternativeLayoutButtonContainer}>
//           <Button title="This looks great!" onPress={this._onPressButton} />
//           <Button title="OK!" onPress={this._onPressButton} color="#841584" />
//         </View>
//       </View>
//     );
//   }
// }
// ??????Touchable ????????????
// ???????????? TouchableHighlight ?????????????????????????????????????????????????????????????????????????????????
//??? Android ??????????????????TouchableNativeFeedback,?????????????????????????????????????????????????????????????????????
// TouchableOpacity ????????????????????????????????????????????????????????????????????????????????????
// ??????????????????????????????????????????????????????????????????????????????????????? TouchableWithoutFeedback

const name = '';
class Touchables extends Component {
  _onPressButton() {
    // fetch('https://localhost:8080');
    // bar();
    var x = 6;
    // foo01();
    // console.log(add(1, 7, 9, 3));
    // test();
    // var a = [];
    // push(a,1,2,3);
    // testOperator();
    // let myObj = {size: 10, label: 'Size 10 Object'};
    // console.log(printLabel(myObj));
    // console.log(obj01.c());
    // printLabel_01({label: 'Size 10 Object -----'});

    // let mySquare = createSquare({color: 'black'});
    // console.log(mySquare);
    // testPro();
    // TypeScript ??????
    // let cardPicker = deck.createCardPicker();
    // let pickedCard = cardPicker();
    // console.log("card: "+pickedCard.card + "of"+pickedCard.suit);
    Alert.alert('You update the button');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }
  /**
   *  underlayColor  ????????????????????????
   * @returns {JSX.Element}
   */
  render() {
    return (
      <View style={touchStyles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={touchStyles.button}>
            <Text style={touchStyles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={touchStyles.button}>
            <Text style={touchStyles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }>
          <View style={touchStyles.button}>
            <Text style={touchStyles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={touchStyles.button}>
            <Text style={touchStyles.buttonText}>
              TouchableWithoutFeedback 001
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={touchStyles.button}>
            <Text style={touchStyles.buttonText}>
              Touchable with long Press
            </Text>
          </View>
        </TouchableHighlight>
        {name ? <Text>prod ??????</Text> : <Text>????????????</Text>}
      </View>
    );
  }
}

const touchStyles = StyleSheet.create({
  container: {
    padding: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 250,
    backgroundColor: '#2196F3',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="WidgetDetails" component={WidgetDetails} />
        <Stack.Screen name="KeyboardAvoiding" component={KeyboardAvoiding} />
        <Stack.Screen name="PressableWidget" component={PressableWidget} />
        <Stack.Screen
          name="RefreshControlWidget"
          component={RefreshControlWidget}
        />
        <Stack.Screen name="ScrollView" component={ScrollViewWidget} />
        <Stack.Screen name="SectionList" component={sectionListWidget} />
        <Stack.Screen name="StatusBar" component={StatusBarWidget} />
        <Stack.Screen name={'Switch'} component={SwitchWidget} />
        <Stack.Screen name={'TextInANest'} component={TextInANest} />
        <Stack.Screen
          name={'TextInput'}
          component={UselessTextInputMultiline}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
