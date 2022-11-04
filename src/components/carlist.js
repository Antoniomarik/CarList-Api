import React,{Component} from  'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import CarDetail from './carDetail';

class Carlist extends Component{ 
    constructor (){
        super();

        this.state = {carList: [] }
    }

    componentDidMount(){
        axios.get('https://givecars.herokuapp.com').then((response) => {
            this.setState({carList: response.data})
        })
    }

    renderlist = () =>{ 
        return this.state.carList.map((brand)=>
        {
            return <CarDetail key ={brand.model[0].name} brand={brand}></CarDetail>
        })
    }

    render(){
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderlist()}
            </ScrollView>
        )
    }
}


export default Carlist;