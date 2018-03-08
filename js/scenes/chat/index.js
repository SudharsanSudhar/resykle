import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import { Container,Content, Header, Left, Body, Right, Button, Icon, Title,Card,CardItem } from 'native-base';
export default class Chat extends Component {
    render() {
        return (
            <Container>
                <Header style={{marginTop:'5%',backgroundColor:'#50e3c2'}}>
                    <Left>
                        <Button transparent onPress={() => Actions.Settings()} >
                            <Icon name='settings' />
                        </Button>
                    </Left>
                    <Body>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='refresh' style={{color:'white',paddingTop:3}} />
                        <Title style={{fontSize:25,paddingLeft:5}}>RECYKLE</Title>
                    </View>

                    </Body>
                </Header>
                <Content>
                    <Card style={{width:'75%',marginTop:'5%',marginLeft:'3%'}}>
                        <CardItem>
                            <Text style={{fontSize:20}}>
                               Hi! Welcome to Recykle! An app to help you manage your houshold waste responsibly
                            </Text>
                        </CardItem>
                    </Card>
                    <Card style={{width:'75%',marginTop:'5%',marginLeft:'23%'}}>
                        <CardItem>
                            <Text style={{fontSize:20}}>
                                Hi! Welcome to Recykle! An app to help you manage your houshold waste responsibly
                            </Text>
                        </CardItem>
                    </Card>
                    <Card style={{width:'75%',marginTop:'5%',marginLeft:'3%'}}>
                        <CardItem>
                            <Text style={{fontSize:20}}>
                                Hi! Welcome to Recykle! An app to help you manage your houshold waste responsibly
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
                <Button style={{width:'80%',justifyContent:'center',backgroundColor:'#50e3c2',marginLeft:'10%',marginBottom:'3%'}}>
                    <Text style={{fontSize:20,color:"white"}}> Cool,tell me more! </Text>
                </Button>

            </Container>
        );
    }
}