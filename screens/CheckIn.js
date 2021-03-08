import React, { Component } from 'react';
import { StyleSheet, Text,  View, TouchableOpacity, Image, SafeAreaView} from 'react-native';

export default class CheckIn extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
                    fontWeight:'bold', fontSize: 16}}> STEP  6/6 </Text>
                    <View>
                        <Image
                            style={{
                            marginTop: 245,
                            paddingRight: 350,
                            resizeMode: "center",
                            height: 80,
                            width: 20,
                            right: 5,
                            }}
                            size={100}
                            source={require("../Images/check.png")}
                        />       
                    </View>
                </View>
                <Text style={styles.titleText}>Check In Success</Text>
                <TouchableOpacity
                    style = {styles.submitButton}
                        onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text style = {styles.submitButtonText}> Success </Text>
                </TouchableOpacity>
            </SafeAreaView>
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
        paddingBottom: 200,
        fontSize: 25,
    },
    iconButton:{
        paddingTop: 120,
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
        margin: 10,
        marginLeft: 10,
        height: 40
    },
    submitButtonText:{
        color: '#000000',
        textAlign: 'center',
    }
}
);