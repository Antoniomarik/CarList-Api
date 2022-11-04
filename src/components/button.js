import React from "react";
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
    const {buttonStyle,textStyle} = styles
    
    return(
        <TouchableOpacity style={buttonStyle}
        onPress={props.buttonPress}
        >
            <Text style={textStyle}>Click ME!</Text>
        </TouchableOpacity>
    )
}
const styles = {
    buttonStyle:{
        flex:1,
        allignSelf: 'stretch',
        backgroundColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gainsboro',
        marginLeft:7,
        marginRight:7,
    },
    textStyle:{
        fonstSize: 14,
        fontWeigth: '500',
        paddingLeft:10,
        paddingTop:6,
        paddingBottom:6,
        color: 'white',
    }
}


export default Button