import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          // flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.buttoncapture}>
            <Text style={{ fontSize: 16 }}> Cancel </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 16 }}> Click </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttoncapture} onPress={() => this.props.navigation.navigate('ProfileDetails')}>
            <Text style={{ fontSize: 16 }}> Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttoncapture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingLeft: 12,
    paddingRight: 12,
    padding: 20,
    paddingHorizontal: 1,
    alignSelf: 'center',
    margin: 20,
  }
});