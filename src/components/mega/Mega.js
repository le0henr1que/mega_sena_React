import React, {Component} from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import Estilo from '../estilo'
import MegaNumeros from './MegaNumeros'


export default class Mega extends Component{

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }
   
    alterarQtdNumero(qtde){
        this.setState( {qtdNumeros: +qtde})
    }
    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo

    }
    gerarNumeros= () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
            .sort((a, b) => a-b)
            this.setState({numeros})
    }
    exibirNumeros = () => {
        const nums = this.state.numeros 
        return nums.map(num => {
            return <MegaNumeros key={num} num={num}/>
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtGrande}>
                    Gerador de Mega-Sena 
                  
                </Text>
                <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Quantidade de Números"
                value={`${this.state.qtdNumeros}`}
                onChangeText={qtde => this.alterarQtdNumero(qtde) }
                ></TextInput>
                <Button
                title='Gerar'
                onPress={this.gerarNumeros}
                ></Button>
                <View style={{
                    flexDirection:'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>

            </>

        )
    }
}