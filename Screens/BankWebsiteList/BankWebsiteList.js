import React from 'react';
import {Image,Dimensions,Text, TouchableOpacity,  View,FlatList,StyleSheet,Linking} from 'react-native';
import styled from 'styled-components/native';

import DatePicker from 'react-native-date-picker';

const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: 100%;
  width:100%;
  flexDirection: row;
  backgroundColor:white;

`
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#5A8DDA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  banktype:{
    fontSize: 14,
    color:'silver',
  },
  link:{
    fontSize: 16,
    color:'white',
  },
  title: {
    fontSize: 16,
  },
});

const DATA = [
  {
    id: 'bd7ascbea-c1b1-s46c2-aed5-3ad53abb28ba',
    title: 'Central Bank of Myanmar',
    link: 'https://www.cbm.gov.mm/',
    banktype: 'Central bank'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Asia Green Development Bank (AGD Bank)',
    link: 'https://www.agdbank.com/',
    banktype: 'Private Bank'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ayeyarwady Bank',
    link: 'https://www.ayabank.com/en_US/',
    banktype: 'Private Bank'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Co-operative Bank (CB Bank)',
    link: 'https://www.cbbank.com.mm/en',
    banktype: 'Private Bank'
  },
  {
    id: 'sbd7acbea-c1b1-46c2-aed5-3asd53abb28ba',
    title: 'First Private Bank',
    link: 'https://www.firstprivatebank.com.mm/en/',
    banktype: 'Private Bank'
  },
  {
    id: 'd3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Kanbawza Bank (KBZ Bank)',
    link: 'https://www.kbzbank.com/en/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Myanma Apex Bank (MAB Bank)',
    link: 'https://www.mabbank.com/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3da1-4371f-bd96-145571e29d72',
    title: 'Myanmar Microfinance Bank',
    link: 'http://www.mmbbank.com.mm/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3da1-47u1f-bd96-145571e29d72',
    title: 'Myanmar Oriental Bank (MOB Bank) ',
    link: 'https://www.mobmyanmar.com/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3da1-e-bd96-145571e29d72',
    title: 'Myanma Tourism Bank',
    link: 'http://www.mmtourismbank.com/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3da1q-471f-bd96-145571e29d72',
    title: 'Shwe Rural and Urban Development Bank (Shwe Bank)',
    link: 'https://shwebank.com/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3seda1-471f-bd96-145571e29d72',
    title: 'Tun Commercial Bank (formerly Tun Foundation Bank)',
    link: 'http://www.tuncommercialbank.com/eng/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3cda1-471f-bd96-145571e29d72',
    title: 'United Amara Bank',
    link: 'https://www.uab.com.mm/',
    banktype: 'Private Bank'
  },
  {
    id: 'e58694a0f-3dda1-471f-bd96-145571e29d72',
    title: 'Yoma Bank',
    link: 'https://www.yomabank.com/',
    banktype: 'Private Bank'
  },

];

function Item({ value }) {
  _onPressButtonOpenLink=(url)=>{
    Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
  }
  return (
    <TouchableOpacity style={styles.item} onPress={()=>{this._onPressButtonOpenLink(value.link)}}>
      <Text style={styles.title}>{value.title}</Text>
      <Text style={styles.link}>{value.link}</Text>
      <Text style={styles.banktype}>Type : {value.banktype}</Text>
    </TouchableOpacity>
  );
}


export default class BankWebsiteList extends React.Component {

	constructor(props){
        super(props);
        

		this.state = { 
			
		}

		//this.switchCamera = this.switchCamera.bind(this);
		
	}//end constructor

    _onPressButton =()=> {
        this.setState({showMenu:!this.state.showMenu});
    }
    onDateChange=(date)=> {
        this.setState({
          selectedStartDate: date,
        });
      }
	render() {
        
		return (
            <Container>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => (
                    <Item
                      id={item.id}
                      value={item}
                      
                    />
                  )}
                  keyExtractor={item => item.id}
                />
            </Container>
         
		);
	}
}