import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';

import QRCode from 'react-native-qrcode'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', codeToGenerate: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type here."
          onChangeText={(newText) => this.setState({text: newText})}
        />

        <Button
            onPress={() => {
              this.setState({codeToGenerate: this.state.text});
            }}
            title="Generate!!"
        />

        <QRCode
          value={this.state.codeToGenerate}
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
  }
});
