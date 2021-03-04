import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import FlipToggle from 'react-native-flip-toggle-button';


export default class ProfileForms extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isSwitch10n: false,
      isSwitch20n: false,
      isSwitch30n: false,
      isSwitch40n: false,
      isSwitch50n: false,
      isSwitch60n: false,
      isSwitch70n: false,
      isSwitch80n: true,
    };
  }
  render(){
      return(
      <ScrollView>
        <Text style={{paddingHorizontal: 30, textAlign:'right', marginTop:10,
              fontWeight:'bold', fontSize: 16}}> STEP  3/6 </Text> 
              <Card style={styles.cardContainer}>
                <Title style= {styles.cardTitle}>Do you have any of the following symptoms?.</Title>
                      <View style= {{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', 
                            marginHorizontal: 1, marginTop: 10, marginBottom:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>Fever</Text>
                        <FlipToggle
                          value={this.state.isSwitch1On}
                          buttonWidth={50}
                          buttonHeight={22}
                          buttonRadius={46}
                          onLabel={'Yes     '}
                          offLabel={'     No'}
                          labelStyle={{ color: '#00ff00' }}
                          onToggle={(value) => {
                            this.setState({ isSwitch1On: value });
                          }}
                          onToggleLongPress={() => {
                            console.log(' Long Press');
                          }}
                        />
                      </View>
                      <View style= {{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', 
                                        marginHorizontal: 1, marginTop: 10, marginBottom:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>Cough{' '}</Text>
                      <FlipToggle
                        value={this.state.isSwitch2On}
                        buttonWidth={50}
                        buttonHeight={22}
                        buttonRadius={46}
                        onLabel={'Yes     '}
                        offLabel={'     No'}
                        labelStyle={{ color: '#00ff00' }}
                        onToggle={(value) => {
                          this.setState({ isSwitch2On: value });
                        }}
                        onToggleLongPress={() => {
                          console.log('Long Press');
                        }}
                      />
                    </View>
                    <View style= {{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', 
                                    marginHorizontal: 1, marginTop: 10, marginBottom:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>Body Aches</Text>
                          <FlipToggle
                            value={this.state.isSwitch3On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#00ff00' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch3On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                    </View>
                    <View style= {{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', 
                                    marginHorizontal: 1, marginTop: 10, marginBottom:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>Sore Throat</Text>
                          <FlipToggle
                            value={this.state.isSwitch4On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#00ff00' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch4On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                    </View>
                    <View style= {{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', 
                                      marginHorizontal: 1, marginTop: 10, marginBottom:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>Running Nose</Text>
                          <FlipToggle
                            value={this.state.isSwitch5On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#00ff00' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch5On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                    </View>
                    <View style= {{paddingLeft: 20, flexDirection: 'row', justifyContent: 'space-between', 
                                      marginHorizontal: 1, marginTop: 10, marginBottom:15}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>Headache</Text>
                          <FlipToggle
                            value={this.state.isSwitch6On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#00ff00' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch6On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                    </View>
                        <Text style={{marginLeft:20, fontWeight: 'bold', fontSize: 15}}>Breathing difficulty or shortness of breath</Text>
                          <View style= {{paddingLeft: 255}}>
                          <FlipToggle
                            value={this.state.isSwitch7On}
                            buttonWidth={50}
                            buttonHeight={22}
                            buttonRadius={46}
                            onLabel={'Yes     '}
                            offLabel={'     No'}
                            labelStyle={{ color: '#00ff00' }}
                            onToggle={(value) => {
                              this.setState({ isSwitch7On: value });
                            }}
                            onToggleLongPress={() => {
                              console.log('Long Press');
                            }}
                          />
                    </View>
                        <Text style={{marginLeft:20, fontWeight: 'bold', fontSize: 15}}>Have you or your family members had 
                            close contact with any persons who has been diagnosed with COVID-19?</Text>
                              <View style= {{paddingLeft: 255}}>
                                <FlipToggle
                                  value={this.state.isSwitch8On}
                                  buttonWidth={50}
                                  buttonHeight={22}
                                  buttonRadius={46}
                                  onLabel={'Yes     '}
                                  offLabel={'     No'}
                                  labelStyle={{ color: '#00ff00' }}
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
    borderRadius: 10,
    width: 400,
    height: 540,
    width: 320,
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
    margin: 21,
    height: 40,
  },
  submitButtonText:{
    color: '#000000',
    textAlign: 'center',
  }
}
);
