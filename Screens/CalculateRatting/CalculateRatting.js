import React from 'react';
import {Image,Dimensions,Text, TouchableOpacity,  View} from 'react-native';
import styled from 'styled-components/native';

import DatePicker from 'react-native-date-picker';

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
  flexDirection: row;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:white;
`
  

export default class CalculateRatting extends React.Component {

	constructor(props){
        super(props);
        

		this.state = { 
			identifedAs: '',
			showMenu: false,
			cameraType : 'back',
			mirrorMode : false,
            'message' : '',
            date: new Date()
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
                <Header>
                    <DatePicker
                        date={this.state.date}
                        mode="date"
                        onDateChange={date => this.setState({ date })}
                        style={{"textColor":"red",height:30,width:Dimensions.get('window').width}}
                    />
                </Header>
                <Body>
                    
                    
                        <Text>asdfasdf asdfasd fasdf asdf a a</Text>
                </Body>
            </Container>
         
		);
	}
}