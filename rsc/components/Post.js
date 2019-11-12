import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { isTemplateElement, tsPropertySignature, placeholder } from '@babel/types';


const width = Dimensions.get('screen').width //Pega a largura da tela com o dimension e armazena na variavel width


export default class Post extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            foto: this.props.foto,
            valorComentario: ''
        }
    }

    exibeLikes(likers){
        if(likers <= 0){
            return
        } else{
            <Text style = {style.curtida}>
                {foto.likers.length} {foto.likers.length > 1 ? 'curtidas' : 'curtida'}
            </Text>
        }
    }

    exibeLegenda(foto){
        if(foto === ''){
            
            return
        }else{
            return(
                <View style = {style.legenda}>
                    <Text style = {style.nomeComentario}>{foto.loginUsuario}</Text>
                    <Text>{foto.comentario}</Text>
                </View>
            )
        }
    }

    carregaIcone(likeada){
        
        if(likeada == true){
            return(require('../img/coracao.png'))
        }else{
            return(require('../img/coracaoSemCor.gif'))
        } 
    }

    like() {
        /*const { foto } = this.state; 

        let novaLista = [];
        if(!foto.likeada) {
            novaLista = [
                ...foto.likers,
                {login: 'meuUsuario'}
            ];
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'meuUsuario'
            });
        }

        const fotoAtualizada = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        }
        this.setState({foto: fotoAtualizada});*/
    }

    adicionaComentario(){
        if(this.state.valorComentario === '')
            return
            
        const novaLista = [...this.state.foto.comentarios, {
            id: this.state.valorComentario,
            login: 'meuUsuario',
            texto: this.state.valorComentario
        }]

        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista
        }

        this.setState({foto: fotoAtualizada, valorComentario: ''})
        this.inputComentario.clear()



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
                    <TouchableOpacity onPress = {this.like.bind(this)}>    
                        <Image
                            style = {style.coracao}
                            source = {this.carregaIcone(foto.likeada)}
                        />
                    </TouchableOpacity>
                    {this.exibeLikes(foto.likers)}
                    {this.exibeLegenda(foto)}

                    {foto.comentarios.map(comentario=>
                        <View style={style.legenda} key={comentario.id}>
                            <Text style={style.nomeComentario}> {comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}
                    <View style = {style.comentario}>
                        <TextInput 
                            style = {style.input} 
                            placeholder = 'Adicione um comentário...'
                            ref={input => this.inputComentario = input}
                            onChangeText={texto=>this.setState({valorComentario:texto})}
                        />
                        <TouchableOpacity onPress={this.adicionaComentario.bind(this)}>
                            <Image style = {style.send} source = {require('../img/send.png')}></Image>
                        </TouchableOpacity> 
                    </View>
                    


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
  },
  curtida:{
    paddingTop: 10,
    fontWeight: 'bold'
  },
  nomeComentario:{
      
      fontWeight: 'bold',
      marginRight: 5
  },
  legenda:{
    flexDirection: 'row',
    marginTop: 5
  },
  input:{
      flex: 1,
      height: 40
  },
  send:{
      width: 30,
      height: 30
  },
  comentario:{
      flexDirection: 'row',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      alignItems: "center" 
  }

})


