import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-paper';

export default class ProfileDetails extends Component {
  render(){
    return (
      <ScrollView>
        <Text style={{paddingHorizontal: 30, textAlign:'right', marginTop:10,
          fontWeight:'bold',fontSize: 16}}> STEP  2/6 </Text>   
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: 100,
                      paddingBottom: 100,
                    }}>
                    <Avatar.Image
                      size={150}
                      source={require('../Images/user.png')}/>      
                  </View>
                    <Text style={styles.textFormat}> Name: Vishnu Prabhalan </Text>
                    <Text style={styles.textFormat}> Contact No(Mobile): 964599XXXX </Text>
                    <Text style={styles.textFormat}> Date: 02 mar, 2021 </Text>
                    <Text style={styles.textFormat}> Time: 10:38 am </Text>
                  <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={() => this.props.navigation.navigate('ProfileForms')}>
                    <Text style = {styles.submitButtonText}> Next </Text>
                  </TouchableOpacity>
                </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textFormat:{
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 16
  },
  submitButton: {
    backgroundColor: '#40e0d0',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    height: 40,
    paddingRight: 60,
    paddingLeft: 60,
  },
  submitButtonText:{
      color: '#000000',
      textAlign: 'center',
  } 
});