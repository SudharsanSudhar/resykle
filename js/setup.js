import * as Expo from 'expo';
import React, { Component } from 'react';
import { StyleProvider, View } from 'native-base';
import App from './App';

export default class Setup extends Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });

}

    render() {
        return (
                        <View style={{ flex: 1 }}>
                        <App />
                    </View>
        );
    }
}
