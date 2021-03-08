import React, {Component, Fragment} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


var items = [
  { name: 'Vishnu prabhalan-964599XXXX' },
  { name: 'Vinodh K-855320XXXX' },
  { name: 'Sreejith S-980961XXXX' },
  { name: 'Sarthak Pujari-955623XXXX' },
  { name: 'Rohit-811303XXXX' },
  { name: 'Raghavendra Nairy-984429XXXX' },
  { name: 'Prasanna Acharaya-741107XXXX' },
  { name: 'Girish K V-984492XXXX' },
  { name: 'Dinesh Naik-973116XXXX' },
  { name: 'Arya Regunath-830101XXXX' },
  { name: 'Arogya Justin-953522XXXX' },
  { name: 'Abraham George-944771XXXX' }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }
  render() {
    return (
      <Fragment>
        <View style={{ flex: 1 }}>
          <Text style={{paddingHorizontal: 30,textAlign:'right', marginTop:10,
              fontWeight:'bold',fontSize: 16, paddingBottom: 150}}> STEP  1/6 </Text>   
            <Text style={styles.titleText}>
              Employee Contact Number*
            </Text>
              <SearchableDropdown
                multi={true}
                selectedItems={this.state.selectedItems}
                onItemSelect={(item) => {
                  const items = this.state.selectedItems;
                  items.push(item)
                  this.setState({ selectedItems: items });
                }}
                containerStyle={{ padding: 5 }}
                onRemoveItem={(item, index) => {
                  const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                  this.setState({ selectedItems: items });
                }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#FAF9F8',
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                defaultIndex={12}
                chip={true}
                resetValue={false}
                textInputProps={
                {
                placeholder: "Select Employee Name and PhoneNumber",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                // onTextChange: text => alert(text)
                }
                }
                listProps={
                  {
                    nestedScrollEnabled: true,
                  }
                }
              />
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                      style = {styles.submitButton}
                      onPress={() => this.props.navigation.navigate('Camera')}>
                    <Text style = {styles.submitButtonText}> Next </Text>
                  </TouchableOpacity>
                </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#40e0d0',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    height: 40,
  },
  submitButtonText:{
      color: '#000000',
      textAlign: 'center',
  }
});