import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { isTemplateElement, tsPropertySignature } from '@babel/types';


const width = Dimensions.get('screen').width //Pega a largura da tela com o dimension e armazena na variavel width


export default class Post extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            foto: this.props.foto
        }

    }
    
    render(){
        const {foto} = this.state
        return(
            <View >
                {/* aqui sera adicionado a imagem do usuario */}
                <View style = {style.header}>
                    <Image 
                        source = {{uri: foto.urlPerfil}}
                        style={style.fotoPerfil}
                    />
                    <Text>{foto.loginUsuario}</Text>              
                </View>
                {/* aqui fica a imagem postada pelo Usuario */}
                <Image 
                    source = {{uri: foto.urlFoto}}
                    style={style.fotos}
                />
                <View style = {style.footer}>
                    <Image
                        style={style.coracao}
                        source = {require('../../rsc/img/coracaoSemCor.gif')}
                    />

                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
  fotoPerfil:{
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 20
  },
  header:{
    flexDirection: "row",
    alignItems: "center"
  },
  fotos:{
    width: width,
    height: width,
    marginTop: 5,
    marginBottom: 5
  },
  footer:{
      margin: 10
  },
  coracao: {
      width: 40,
      height: 40
  }

})


