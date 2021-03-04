import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import SignatureCapture from 'react-native-signature-capture';

export default class ProfileForms2 extends Component {
  render(){
    return (
        <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
      <Text style={{paddingHorizontal: 30, textAlign:'right', marginTop:10,
              fontWeight:'bold', fontSize: 16}}> STEP  5/6 </Text> 
          <Text style={styles.infoText}>      I Vishnu Prabhalan, company Six30 Labs declare that I haven’t travelled to China and other virus affected countries in the last 28 days.</Text>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={styles.signText}>Sign Below</Text>
                <SignatureCapture
                    style={[{flex:1},styles.signature]}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    backgroundColor="#fffff0"
                    borderColor="black"
                    strokeColor="black"
                    minStrokeWidth={4}
                    maxStrokeWidth={4}
                    viewMode={"portrait"}/>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.saveSign() } } >
                        <Text>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                </View>
              </View>
            <TouchableOpacity
                style = {styles.submitButton}
                onPress={() => this.props.navigation.navigate('ThankYou')}>
                <Text style = {styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
  saveSign() {
    this.refs["sign"].saveImage();
}

resetSign() {
    this.refs["sign"].resetImage();
}

_onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
}
_onDragEvent() {
     // This callback will be called when the user enters signature
    console.log("dragged");
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#40e0d0',
    borderRadius: 10,
    padding: 10,
    margin: 21,
    height: 40,
  },
  submitButtonText:{
    color: '#000000',
    textAlign: 'center',
  },
  signature: {
    flex:1,
    borderWidth: 1,
    borderColor: '#000033',
    padding: 100,
    margin: 10,
  },
  infoText:{
    alignItems:"center",
    justifyContent:"center",
    fontWeight:'bold',
    fontSize: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  signText: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    paddingLeft: 120,
    fontWeight:'bold',
    fontSize:20
  },
  buttonStyle: {
    flex: 1, justifyContent: "center", alignItems: "center", height: 40,
    backgroundColor: "#40e0d0",
    borderRadius: 5,
    margin: 20,
  }
});