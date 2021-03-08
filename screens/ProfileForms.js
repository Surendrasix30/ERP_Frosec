import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Card, Title} from 'react-native-paper';
import FlipToggle from 'react-native-flip-toggle-button';
import { ListItem } from 'react-native-elements';


export default class ProfileForms extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isSwitch10n: {isSwitch10n: false},
      isSwitch20n: {isSwitch20n: false},
      isSwitch30n: {isSwitch30n: false},
      isSwitch40n: {isSwitch40n: false},
      isSwitch50n: {isSwitch50n: false},
      isSwitch60n: {isSwitch60n: false},
      isSwitch70n: {isSwitch70n: false},
      isSwitch80n: {isSwitch80n: true},
    };
  }
  render(){
      return(
      <ScrollView>
        <Text style={{paddingHorizontal: 30, textAlign:'right', marginTop:10,
              fontWeight:'bold', fontSize: 16}}> STEP  3/6 </Text> 
              <Card style={styles.cardContainer}>
                <Title style= {styles.cardTitle}>Do you have any of the following symptoms?.</Title>
                    <ListItem bottomDivider style={{ margin: 0.8 }}>
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ paddingRight: 210, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Fever</Text>
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
                            console.log('Long Press');
                          }}
                        />
                      </View>
                    </ListItem>
                    <ListItem bottomDivider style={{ margin: 0.8 }}>
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ paddingRight: 200, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Cough{' '}</Text>
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
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ paddingRight: 170, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Body Aches</Text>
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
                    <ListItem bottomDivider style={{ margin: 0.8 }}>
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ paddingRight: 170, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Sore Throat</Text>
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
                    </ListItem>
                    <ListItem bottomDivider style={{ margin: 0.8 }}>
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ paddingRight: 155, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Running Nose</Text>
                          <FlipToggle
                            value={this.state.isSwitch5On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#fffacd' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch5On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                      </View>
                    </ListItem>
                    <ListItem bottomDivider style={{ margin: 0.8 }}>
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ paddingRight: 180, flexDirection: 'row', fontWeight: 'bold', fontSize: 14}}>Headache</Text>
                          <FlipToggle
                            value={this.state.isSwitch6On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#fffacd' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch6On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                      </View>
                    </ListItem>
                    <ListItem bottomDivider style={{ margin: 0.4 }}>
                        <View style= {{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 90}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14}}>Breathing difficulty or shortness of breath</Text>
                          <FlipToggle
                            value={this.state.isSwitch7On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#fffacd' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch7On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                          </View>
                    </ListItem>
                      <View style= {{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 55, marginTop:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, paddingLeft: 15}}>Have you or your family members had 
                            close contact with any persons who has been diagnosed with COVID-19?</Text>
                                <FlipToggle
                                  value={this.state.isSwitch8On}
                                  buttonWidth={50}
                                  buttonHeight={22}
                                  buttonRadius={46}
                                  onLabel={'Yes     '}
                                  offLabel={'     No'}
                                  labelStyle={{ color: '#fffacd' }}
                                  onToggle={(value) => {
                                    this.setState({ isSwitch8On: value });
                                  }}
                                  onToggleLongPress={() => {
                                    console.log('Long Press');
                                  }}
                                />
                              </View>
              </Card>        
            <TouchableOpacity
              style = {styles.submitButton}
              onPress={() => this.props.navigation.navigate('ProfileForms1')}>
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
    borderRadius: 8,
    height: 560,
    width: 330,
    marginLeft: 18,
  },
  cardTitle:{
    alignContent: 'center',
    fontSize: 18,
    margin:10,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#40e0d0',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: '#000000',
    textAlign: 'center',
  }
}
);
