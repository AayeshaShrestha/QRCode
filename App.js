import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';

import QRCode from 'react-native-qrcode'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type here."
          onChangeText={(newText) => this.setState({text: newText})}
        />

        <View style={styles.button}>

          <Button
            onPress={() => {
              var displayText = this.state.text;
              Alert.alert(displayText);
            }}
            title="Generate!!"
          />
        </View>

        <QRCode
          value={this.state.text}
          size={250}
          bgColor='#000'
          fgColor='#fff'
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 125,
  },
  button: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '40%',
    height: 40
  }
});
