import React from 'react';
import {View, Text} from 'react-native';

const Item = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}


const styles = {
    viewStyle:{
        borderWidth: 1,
        borderColor: 'gainsboro',
        shadowColor: 'black',
        shadowOffSet: {widht:1,height:1},
        bottomBorderWidth: 0,
        marginLeft: 5,
        opacity: 0.9,
        marginRight: 5,
        marginTop: 10,
    }
}
export default Item;