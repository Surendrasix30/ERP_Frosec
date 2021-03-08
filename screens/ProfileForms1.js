import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Card, Title} from 'react-native-paper';
import FlipToggle from 'react-native-flip-toggle-button';
import { ListItem } from 'react-native-elements';


export default class ProfileForms1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isSwitch10n: {isSwitch10n: false},
      isSwitch20n: {isSwitch20n: false},
      isSwitch30n: {isSwitch30n: false},
      isSwitch40n: {isSwitch40n: true}
    };
  }
  render(){
      return(
      <ScrollView>
        <Text style={{paddingHorizontal: 30, textAlign:'right', marginTop:10,
              fontWeight:'bold', fontSize: 16}}> STEP  4/6 </Text> 
            <Card style={styles.cardContainer}>
              <Title style= {styles.cardTitle}>Have you visited the following in the last 14 days?.</Title>
              <ListItem bottomDivider style={{ margin: 1 }}>
                <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{ paddingRight: 90, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Any Hot Spots of India</Text>
                  <FlipToggle
                    value={this.state.isSwitch1On}
                    buttonWidth={50}
                    buttonHeight={22}
                    buttonRadius={46}
                    onLabel={'Yes     '}
                    offLabel={'     No'}
                    labelStyle={{ color: '#fffacd' }}
                    onToggle={(value) => {
                      this.setState({ isSwitch1On: value });
                    }}
                    onToggleLongPress={() => {
                      console.log(' Long Press');
                    }}
                  />
              </View>
              </ListItem>
              <ListItem bottomDivider style={{ margin: 1 }}>
                <View style= {{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 90}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14}}>Any Containment Zones / Hot Spots of Karnataka</Text>  
                    <FlipToggle
                      value={this.state.isSwitch2On}
                      buttonWidth={50}
                      buttonHeight={22}
                      buttonRadius={46}
                      onLabel={'Yes     '}
                      offLabel={'     No'}
                      labelStyle={{ color: '#fffacd' }}
                      onToggle={(value) => {
                        this.setState({ isSwitch2On: value });
                      }}
                      onToggleLongPress={() => {
                        console.log('Long Press');
                      }}
                    />
              </View>
              </ListItem>
              <ListItem bottomDivider style={{ margin: 1 }}>
                <View style= {{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 90}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14}}>Any Containment Zones / Hot Spots of Bengaluru</Text>
                    <FlipToggle
                      value={this.state.isSwitch3On}
                      buttonWidth={50}
                      buttonHeight={22}
                      buttonRadius={46}
                      onLabel={'Yes     '}
                      offLabel={'     No'}
                      labelStyle={{ color: '#fffacd' }}
                      onToggle={(value) => {
                        this.setState({ isSwitch3On: value });
                      }}
                      onToggleLongPress={() => {
                        console.log('Long Press');
                      }}
                    />
                </View>
              </ListItem>              
              <View style= {{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 55, marginTop:15}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14, paddingLeft: 15}}>Have you checked your body temperature?</Text>
                      <FlipToggle
                        value={this.state.isSwitch4On}
                        buttonWidth={50}
                        buttonHeight={22}
                        buttonRadius={46}
                        onLabel={'Yes     '}
                        offLabel={'     No'}
                        labelStyle={{ color: '#fffacd' }}
                        onToggle={(value) => {
                          this.setState({ isSwitch4On: value });
                        }}
                        onToggleLongPress={() => {
                          console.log('Long Press');
                        }}
                      />
                </View>
            </Card>        
            <TouchableOpacity
              style = {styles.submitButton}
              onPress={() => this.props.navigation.navigate('ProfileForms2')}>
              <Text style = {styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
      </ScrollView>
      );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    paddingRight: 10,
    flex:1,
    justifyContent: 'center',
    borderColor: 'black',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    height: 510,
    width: 320,
    marginLeft: 18,
  },
  cardTitle:{
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
  cardParagraph:{
    fontSize: 15,
    padding: 2,
    paddingLeft: 5,
    paddingTop: 8,
    alignContent: 'space-between',
  },
  cardText:{
    fontSize: 15,
    padding: 5,
    paddingLeft: 5,
    paddingRight: 70, 
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
  }
}
);
