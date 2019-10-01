import React from 'react';
import {Image,Dimensions,Text, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

import ExchangeRate from '../Screens/ExchangeRate/ExchangeRate';
import BankWebsiteList from '../Screens/BankWebsiteList/BankWebsiteList';


const styles = StyleSheet.create({
    menuButton: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
      flexDirection:'row',
      height:50,
      alignItems: 'center'
    },
    menuFont: {
      color: '#ffffff',
      left:20
    },
    menuIcon: {
        width:30,
        height:30,
        left:10
      },
      line:{
          width:'80%',
          height:1,
          left:'10%',
          backgroundColor:'white'
      }
  });

const Container = styled.View`

  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:#3370CA;

`
const Header = styled.View`
  display:flex;
  flexDirection: row;
  height: 50px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:#012DCB;
`
    const HLeft = styled.View`
        flexDirection: column;
        width: 50px;
        alignItems: center;
        justifyContent: center;
        backgroundColor:#0152CB;
    `
    const HRight = styled.View`
        width: ${Dimensions.get('window').width - 50}px;
        alignItems: center;
		justifyContent: center;
    `
const Body = styled.View`
    display:flex;
  flexDirection: row;
  height: ${Dimensions.get('window').height-50}px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:blue;
`
    const LeftPanel = styled.View`
    height: ${Dimensions.get('window').height-30}px;
    width: ${Dimensions.get('window').width}px;
    zIndex:100000;
    position:absolute;
    flexDirection:row;
    `
        const LeftPanelInner1 = styled.View`
        height: ${Dimensions.get('window').height-50}px;
        width: ${Dimensions.get('window').width-100}px;
        backgroundColor:#0152CB;
        `
        const LeftPanelInner2 = styled.View`
        height: ${Dimensions.get('window').height-50}px;
        width: 100px;
        backgroundColor:rgba(1, 82, 203, 0.5);
    `

    const RightPanel = styled.View`
    height: 100%;
    width: 100%;
    backgroundColor:red;
    `


export default class Layout extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
            showMenu: false,
            Screen:'ExchangeRate' //bankwebsite
		}

		//this.switchCamera = this.switchCamera.bind(this);
		
	}//end constructor
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'https://play.google.com/store/apps/details?id=com.myanmarexchangerate',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
      _onPressButtonLikeFacebook=()=>{
        let url = "https://www.facebook.com/MyannarMobileApplications";
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
    _onPressButton =()=> {
        this.setState({showMenu:!this.state.showMenu});
    }
    _onPressButtonExchangeRate =()=>{
        this.setState({showMenu:!this.state.showMenu,Screen:'ExchangeRate'});
    }
    _onPressButtonBankWebsiteList=()=> {
        this.setState({showMenu:!this.state.showMenu,Screen:'bankwebsite'});
    }
    
	render() {
        let MenuPanel = <LeftPanel showMenu={this.state.showMenu}>
            <LeftPanelInner1>
                <TouchableOpacity onPress={this._onPressButtonExchangeRate} style={styles.menuButton}> 
                    <Image source={require('../assets/images/dollar.png')} style={styles.menuIcon} />
                    <Text style={styles.menuFont}> Exchange Rates</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButtonBankWebsiteList} style={styles.menuButton}> 
                    <Image source={require('../assets/images/website.png')} style={styles.menuIcon} />
                    <Text style={styles.menuFont}> Bank Websites List</Text>
                </TouchableOpacity>

                <View style={styles.line}></View>
            
                
                <TouchableOpacity onPress={this.onShare} style={styles.menuButton}> 
                    <Image source={require('../assets/images/share.png')} style={styles.menuIcon} />
                    <Text style={styles.menuFont}> Share with friends</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} style={styles.menuButton}> 
                    <Image source={require('../assets/images/star.png')} style={styles.menuIcon} />
                    <Text style={styles.menuFont}> Rate the Application</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButtonLikeFacebook} style={styles.menuButton}> 
                    <Image source={require('../assets/images/facebook.png')} style={styles.menuIcon} />
                    <Text style={styles.menuFont}> Like us on Facebook</Text>
                </TouchableOpacity>

            </LeftPanelInner1>
            <LeftPanelInner2>
                <TouchableOpacity onPress={this._onPressButton} style={{width:'100%',height:'100%'}}>
                </TouchableOpacity>
            </LeftPanelInner2>
        </LeftPanel>;
        let Screen = (this.state.Screen=="ExchangeRate"? <ExchangeRate />:<BankWebsiteList />);
		return (
            <Container>
                <Header>
                    <HLeft>
                        <TouchableOpacity onPress={this._onPressButton}> 
                            <Image source={require('../assets/images/menu.png')} style={{width: 20, height: 20}} />
                        </TouchableOpacity>
                    </HLeft>
                    <HRight>
                        <Text style={{color:'white'}}>Myanmar Exchange Rates</Text>
                    </HRight>
                </Header>
                <Body>
                    {this.state.showMenu?MenuPanel:null}
                    <RightPanel>
                        {Screen}
                    </RightPanel>
                </Body>
            </Container>
         
		);
	}
}