import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Image , TouchableOpacity} from 'react-native';

export default class Welcome extends Component{
    render(){
        return(
            <ScrollView> 
                <View style={styles.container}>
                    <View>
                        <Image
                            style={{
                            flexDirection: 'row',
                            marginTop: 2,
                            resizeMode: "center",
                            height: 100,
                            width: 200,
                            left: 80,
                            }}
                            size={100}
                            source={require("../Images/logo.png")}
                        />       
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style = {styles.submitButtonText}> Check In </Text>
                </TouchableOpacity>
                <View style = {styles.textSpace}>
                </View>
                <TouchableOpacity
                    style = {styles.submitButton}>
                    <Text style = {styles.submitButtonText}> Check Out </Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 60
  },
  submitButton: {
    backgroundColor: '#40e0d0',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 40,
    paddingBottom: 20,
    margin: 30
  },
  submitButtonText:{
    color: '#000000',
    textAlign: 'center',
  },
  textSpace:{
    padding: 20,
  }
}
);
