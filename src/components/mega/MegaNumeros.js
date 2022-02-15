import React from "react";
import {Text, View, StyleSheet} from 'react-native'

export default ({num}) => {
    return(
        <View style={style.Container}>
            <Text style={style.Num}>
                {num}
            </Text>
        </View>
    )

}
const style = StyleSheet.create({
    Container:{
        width: 50,
        height: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius:25,

    },
    Num:{
        color:'#FFFF',
        fontSize:30, 
        textAlign: "center"
        
        
    }
})