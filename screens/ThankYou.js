import React, { Component } from 'react';
import { StyleSheet, Text,  View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ThankYou extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
                    fontWeight:'bold', fontSize: 16}}> STEP  6/6 </Text>   
                <View style={styles.iconButton}>
                <Icon.Button
                      name="check-all"
                      size={50}
                />
                </View>
                <Text style={styles.titleText}>Check In Success</Text>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text style = {styles.submitButtonText}> Cancel </Text>
                  </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleText:{
    color: '#008000',
    fontWeight: 'bold',
    justifyContent: "center",
    paddingLeft: 70,
    fontSize: 25,
    paddingBottom: 70,
    },
    iconButton:{
    paddingTop: 210,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    color: '#008000',
    fontSize: 22,
    },
    submitButton: {
        backgroundColor: '#40e0d0',
        borderRadius: 10,
        padding: 10,
        margin: 50,
        marginLeft: 30,
        height: 40,
      },
      submitButtonText:{
        color: '#000000',
        textAlign: 'center',
      }
}
);