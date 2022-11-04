import React from "react";
import {View, Text, Image} from 'react-native';

import Item from "./item";
import ItemSection from './itemSection'
import Button from "./button";

const CarDetail = ({brand}) => {
    return(
        <Item>
            <ItemSection>
                <View style = {styles.headerContainer}>
                    <Text style={styles.headerText}>{brand.brand}</Text>
                    <Text style={styles.headerText}>{brand.model[0].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style={styles.imageStyle} source={{uri: brand.model[0].image }}/>
            </ItemSection>
            <ItemSection>
                <Button buttonPress={()=>{
                    console.log(brand.brand)
                }}></Button>
            </ItemSection>
        </Item>
    )
}

const styles = {
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText:{
        fontSize: 18,
        fontWeight : '500',
        textTransform: 'uppercase'
    },
    imageStyle:{
        height: 300,
        flex:1,
        width: 0,
    },
}
export default CarDetail;