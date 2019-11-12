import React from 'react';
import {Component} from 'react';

import Post from './rsc/components/Post'

import {
  StyleSheet,
  Dimensions,
  FlatList
} from 'react-native';
import { throwStatement } from '@babel/types';


const width = Dimensions.get('screen').width //Pega a largura da tela com o dimension e armazena na variavel width

export default class App extends Component{
  constructor() {
    super();
    this.state = {
        fotos: []
    }
  }



  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json=> this.setState({fotos: json}))
  }

  render(){
    return(
      <FlatList style={style.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={({item}) =>
          <Post foto={item}/>
        }
      />  
    )
  }
}

const style = StyleSheet.create({
  container:{
    marginTop : 50
  },
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
  }

})


