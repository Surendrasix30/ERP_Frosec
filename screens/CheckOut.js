import React, { Component } from 'react';
import { StyleSheet, Text,  View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { Card, Row, Col } from 'react-native-paper';

export default class CheckOut extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
                    fontWeight:'bold', fontSize: 16}}> STEP  6/7 </Text>
                    <View>
                        <Image
                            style={{
                            flexDirection: 'row',
                            resizeMode: "center",
                            height: 100,
                            width: 200,
                            left: 80,
                            }}
                            size={100}
                            source={require("../Images/logo.png")}
                        />       
                    </View>
                    <Card style={styles.cardView}>
                        <View style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 30, flexDirection: 'row', marginHorizontal: 1, justifyContent: 'space-between', right: 5}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 30}}> George Court</Text>
                                <Image
                                    style={{
                                    height: 50,
                                    width: 55
                                    }}
                                    size={100}
                                    source={require("../Images/logo.png")}
                                />    
                        </View>
                        <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image 
                                style={{
                                    height:50,
                                    width:60,
                                }}
                                    source={require("../Images/user.png")}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}> Name: Vishnu Prabhalan</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 155, paddingBottom: 22}}> Date: 02 mar, 2021 </Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 50, paddingBottom: 10}}> Contact No(Mobile): 964599XXXX </Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 50, paddingTop: 10, marginLeft: 175}}> Time: 10:38 am </Text>
                        </View>
                    </Card> 
                    <View style={{ paddingBottom:50}}></View> 
                <TouchableOpacity
                    style = {styles.submitButton}
                        onPress={() => this.props.navigation.navigate('ThankYou')}>
                    <Text style = {styles.submitButtonText}> CheckOut </Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    cardView:{
        margin: 8,
        padding: 30,
        paddingTop: 20, 
        backgroundColor:"white",
        borderRadius:15,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 10,
        shadowRadius: 5, 
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