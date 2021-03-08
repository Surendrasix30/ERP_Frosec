import React, { Component } from 'react';
import { StyleSheet, Text,  View, Image} from 'react-native';

export default class ThankYou extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.iconButton}>
                <View>
                    <Image
                        style={{
                        marginTop: 130,
                        paddingRight: 200,
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
                <Text style={styles.titleText}>Check Out Successfully</Text>
                <Text style={styles.titleText1}>Thankyou For Your Information.</Text>
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
        paddingLeft: 50,
        paddingBottom: 15,
        fontSize: 25,
    },
    titleText1:{
        color: '#008000',
        fontWeight: 'bold',
        justifyContent: "center",
        paddingLeft: 20,
        fontSize: 23,
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