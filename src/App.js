import React from "react"
import {View, Text, StyleSheet} from 'react-native'

import Mega from './components/mega/Mega'


export default () => (

    <View style={style.App}>

        <Mega qtdNumeros={12} />
      
    </View>

)

const style = StyleSheet.create({
    App:{
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
    }
})