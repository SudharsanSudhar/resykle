import React, {Component} from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {Router, Scene,Stack} from 'react-native-router-flux';
import HomeLogin from './scenes/login/';
import Demo from './scenes/login/demo';
import Login from './scenes/login/login';
import Chat from './scenes/chat/';
import Settings from './scenes/settings/';


class AppNavigator extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene panHandlers={null} key="HomeLogin" component={HomeLogin}  hideNavBar initial={true}/>
                    <Scene panHandlers={null} key="Demo" component={Demo} hideNavBar/>
                    <Scene panHandlers={null} key="Login" component={Login} hideNavBar/>
                    <Scene panHandlers={null} key="Chat" component={Chat} hideNavBar/>
                    <Scene panHandlers={null} key="Settings" component={Settings} hideNavBar/>
                    </Stack>
                </Router>

        );
    }
}

export default AppNavigator;