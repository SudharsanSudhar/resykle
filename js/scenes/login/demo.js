import React, {Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import {Button,Container,Content,Card,CardItem} from 'native-base';
const logos = require('Resykle/images/def.png');
class Demo extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#fff',marginTop:'5%'}}>
                <Card>
                    <CardItem>
                        <Image source={logos} style={{height:470,width:360,flex:1}}/>
                    </CardItem>
                    <CardItem>
                        <Text style={{fontWeight: 'bold',fontSize: 20,marginLeft:15}}>Lets work together to send less waste into Indian landfills</Text>
                    </CardItem>
                    <CardItem>
                        <View style={{justifyContent: 'flex-end',marginLeft:'65%'}}>
                            <Button style={{width:100,justifyContent:'center',backgroundColor:'#50e3c2'}} onPress={() => Actions.Login()}>
                                <Text style={{fontSize:20,color:"white"}}> Next </Text>
                            </Button>
                        </View>
                    </CardItem>
                </Card>

            </Container>
        );
    }
}

export default Demo;



