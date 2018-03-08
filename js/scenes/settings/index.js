import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import { Container,Content, Header, Left, Body, Right, Button, Icon, Title,Card,CardItem ,List,ListItem} from 'native-base';

class Settings extends Component {
    render() {
        return (
            <Container>
                <Header style={{marginTop:'5%',backgroundColor:'#50e3c2'}}>
                    <Left>
                        <Button transparent >
                            <Icon name='arrow-back' onPress={() => Actions.pop()}/>
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
                    <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:20,marginRight:'10%',marginLeft:'10%',justifyContent:'center'}}> "Individual commitment to a group effort that is what makes a team
                        work,a company work, a society work,a civilization work." </Text>
                    <Text style={{fontSize:20,marginRight:'30%',marginLeft:'30%',fontWeight:'bold'}}>Vince Lombardi </Text>
                        </View>
                    <View style={{paddingTop:10}}>
                    <Text style={{fontSize:17,marginRight:'10%',marginLeft:'3%'}}>All it takes is a few steps to manage your household waste responsibly.Here are some simple guides to get you started. </Text>
                        </View>
                    <View>
                        <List>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='log-out' />
                                <Text style={{fontSize:17,paddingLeft:10}}>How to compost?</Text>
                              </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='home' />
                                <Text style={{fontSize:17,paddingLeft:10}}>Common household recyclables</Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='reload' />
                                <Text style={{fontSize:17,paddingLeft:10}}>Why segragate? </Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='refresh' />
                                <Text style={{fontSize:17,paddingLeft:10}}>How to segragate? </Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>

                        </List>
                        </View>
                    <View style={{marginTop:'5%',marginLeft:'3%'}}>
                        <Text style={{fontSize:17}}>
                            Make show your recyclables dont end up in the landfill.Sell them to a Kabadiwala-who are small scrap dealers found in your
                            neighbourhood.They buy recyclable waste like paper,most kinds of plastic,glass and metal
                        </Text>
                    </View>
                    <View>
                        <List>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='pin' />
                                    <Text style={{fontSize:17,paddingLeft:10}}>Find your nearest Kabadiwala</Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='star' />
                                    <Text style={{fontSize:17,paddingLeft:10}}>Rate Us</Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>

                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='chatbubbles' />
                                    <Text style={{fontSize:17,paddingLeft:10}}>Send us feedback</Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>

                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='share' />
                                    <Text style={{fontSize:17,paddingLeft:10}}>Share with Friends</Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Icon style={{color:'#50e3c2'}} name='refresh' />
                                    <Text style={{fontSize:17,paddingLeft:10}}>Reset App</Text>
                                </Left>
                                <Right>
                                    <Icon style={{color:'#50e3c2'}} name='arrow-forward' />
                                </Right>
                            </ListItem>


                        </List>
                        </View>
                </Content>
                </Container>
            
        );
    }
}

export default Settings;
