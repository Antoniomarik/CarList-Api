//import libraries
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import Carlist from './src/components/carlist';


//create componenet
const App = () => {
    return ( 
        <View style={{flex:1}}>
            <Header title = {'Cars'}></Header> 
            <Carlist></Carlist>
        </View>
        )
};



//render component to screen
AppRegistry.registerComponent("AwesomeProject", () => App)
