//import libraries
import React from 'react'; 
import ReactNative from 'react-native';
import {Text,View } from 'react-native';


//make components
const Header = (props) => {
    const { textStyling ,viewStyle} = style_1; 
            //textStyling poyivamo u returnu - style {tu }
    //druga ocija
    // const textStyling = style_1.textStyling

    return(
        <View style = {viewStyle}>
            <Text style = {textStyling} >{props.title}</Text>
        </View>
    );
}
//styling out compoent---isto kao css samo koristi camelCase
//justifyContent y os glavna
//allignItems x os
const style_1 = {
    textStyling: {
        fontSize: 25,
    },

    viewStyle: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'cornflowerblue',
        height: 70,
        paddingTop: 5,
       

    }
};


//3.make component available to other components 
//ne renderamo odma, pripremamo child component od nase root apk

// APP (root component)
// Header (APP child - child component)

//3.
export default Header;
//nakon ove linije , Header ce bit dostupan kroz cili projekt