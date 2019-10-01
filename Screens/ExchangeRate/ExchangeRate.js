import React from 'react';
import {Image,Dimensions,Text, TouchableOpacity,  View,StyleSheet,FlatList} from 'react-native';
import styled from 'styled-components/native';

//import DatePicker from 'react-native-date-picker';
import Flag from 'react-native-flags';
const styless = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection:'row',
    backgroundColor: '#5A8DDA',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomColor:'white',
    borderBottomWidth:1,
    padding:5
  },
  mmk:{
    fontSize: 14,
    color:'#ffffff',
    textAlign:'right'
  },
  flag:{
    width:'20%'
  },
  country:{
    width:'40%'
  },
  price:{
    width:'40%',
    

  },
  title: {
    fontSize: 16,
  },
});
const styles = StyleSheet.create({
    
    item: {
      backgroundColor: '#5A8DDA',
      padding: 5,
      width:'100%',
    },
  });
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;

`
const Header = styled.View`
  display:flex;
  flexDirection: row;
  height: 30px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:#5375A8;
`
  
const Body = styled.View`
    display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:white;
`
  
function Item({ value }) {
  _onPressButtonOpenLink=(url)=>{
   /* Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));*/
    //alert('hello');
  }
  return (
    //onPress={()=>{this._onPressButtonOpenLink("http://www.google.com")}}
    <TouchableOpacity key={"v"+value.id} style={styless.itemContainer} >
      <View style={styless.flag}>
        <Flag
          key={"vc"+value.id}
          code={value.country.countryCode}
          size={48}
        />
      </View>
      <View style={styless.country}>
        <Text style={styless.title}>{value.currencyCode}</Text>
        <Text style={styless.title}>{value.country.countryName}</Text>
      </View>
      <View style={styless.price}>
        <Text style={styless.mmk}>{value.value} MMK</Text>
      </View>
     
      
     
    </TouchableOpacity>
  );
}

export default class ExchangeRate extends React.Component {

	constructor(props){
        super(props);
        

		this.state = { 
			identifedAs: '',
			showMenu: false,
			cameraType : 'back',
			mirrorMode : false,
            'message' : '',
            date: new Date(),
            dataSource:[]
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
    componentDidMount(){
    let CountryArray ={
        "USD":{"countryCode":'US',"countryName":"U.S.A"},
        "VND":{"countryCode":'VN',"countryName":"Vietnam"},
        "THB":{"countryCode":'TH',"countryName":"Thailand"},
        "SEK":{"countryCode":'SE',"countryName":"Sweden"},
        "LKR":{"countryCode":'LK',"countryName":"Sri Lanka"},
        "ZAR":{"countryCode":'ZA',"countryName":"South Africa"},
        "RSD":{"countryCode":'RS',"countryName":"Serbia"},
        "SAR":{"countryCode":'SA',"countryName":"Saudi Arabia"},
        "RUB":{"countryCode":'RU',"countryName":"Russian Federation"},
        "PHP":{"countryCode":'PH',"countryName":"Philippines"},
        "PKR":{"countryCode":'PK',"countryName":"Pakistan"},
        "NOK":{"countryCode":'NO',"countryName":"Norway"},
        "NZD":{"countryCode":'NZ',"countryName":"New Zealand"},
        "NPR":{"countryCode":'NP',"countryName":"Nepal"},
        "MYR":{"countryCode":'MY',"countryName":"Malaysia"},
        "LAK":{"countryCode":'LA',"countryName":"Lao PeopleÕs Democratic Republic"},
        "KWD":{"countryCode":'KW',"countryName":"Kuwait"},
        "KRW":{"countryCode":'KR',"countryName":"Korea"},
        "KES":{"countryCode":'KE',"countryName":"Kenya"},
        "ILS":{"countryCode":'IL',"countryName":"Israel"},
        "IDR":{"countryCode":'ID',"countryName":"Indonesia"},
        "INR":{"countryCode":'IN',"countryName":"India"},
        "HKD":{"countryCode":'HK',"countryName":"Hong Kong"},
        "EGP":{"countryCode":'EG',"countryName":"Egypt"},
        "DKK":{"countryCode":'DK',"countryName":"Denmark"},
        "CZK":{"countryCode":'CZ',"countryName":"Czech Republic"},
        "CNY":{"countryCode":'CN',"countryName":"China"},
        "CAD":{"countryCode":'CA',"countryName":"Canada"},
        "KHR":{"countryCode":'KH',"countryName":"Cambodia"},
        "BND":{"countryCode":'BN',"countryName":"Brunei Darussalam"},
        "BRL":{"countryCode":'BR',"countryName":"Brazil"},
        "BDT":{"countryCode":'BD',"countryName":"Bangladesh"},
        "AUD":{"countryCode":'AU',"countryName":"Australian"},
        "JPY":{"countryCode":'JP',"countryName":"Japan"},
        "CHF":{"countryCode":'CH',"countryName":"Switzerland"},
        "GBP":{"countryCode":'IM',"countryName":"Isle of Man"},
        "SGD":{"countryCode":'SG',"countryName":"Singapore"},
        "EUR":{"countryCode":'DE',"countryName":"[Euros] Germany"}
      };
      //alert(CountryArray["EUR"]);
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '-' + dd + '-' + yyyy;
      //alert(today);
        return fetch('https://forex.cbm.gov.mm/api/history/'+today)
          .then((response) => response.json())
          .then((responseJson) => {
            //alert(responseJson.rates.USD);
            let raw = responseJson.rates;
            let data = []
            let count = 0;
            Object.keys(raw).forEach(function(key) {
                console.log('Key : ' + key + ', Value : ' + raw[key])
                data.push({id:count,'currencyCode':key,'country':CountryArray[key],'value':raw[key]});
                count = count +1;
              })
            this.setState({
              isLoading: false,
              dataSource: data,
            });
    
          })
          .catch((error) =>{
              alert(error);
            console.error(error);
          });
      }
    
	render() {
        let TextCollections = [];
        
		return (
            <Container>
                
                <Body>
                    
                <FlatList
                  data={this.state.dataSource}
                  renderItem={({ item }) => (
                    <Item
                      id={item.id}
                      value={item}
                      
                    />
                  )}
                  keyExtractor={item => item.id}
                />
                </Body>
            </Container>
         
		);
	}
}