import React, { Component } from 'react'
import {Container, Formulario, Btn} from './styles';
import firebase from '../../services/firebase';
import { withRouter } from 'react-router-dom';
class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nome: localStorage.nome,
      novo: false,

      titulo: '',
      descricao: '',
      img: '',
      msgError: '',
    }

    this.postar = this.postar.bind(this);
  }
  componentDidMount()
  /*verifica se tem um usuário logado, 
  se não tiver redireciona para a tela de login*/{
    if(!firebase.getCurrent()){
      return this.props.history.replace('/login');
    }
    // pega o nome do user
    firebase.getUserName(i => {
      localStorage.nome = i.val().nome;
      this.setState({nome: localStorage.nome});
    })
  }

  postar = async () => {
    // vertifica se todos os planos estão preenchidos
    if(this.state.titulo !== '' && 
          this.state.img !== '' && 
          this.state.descricao !== ''
      ){
      let posts = firebase.app.ref('posts');
      let key = posts.push().key;

      await posts.child(key).set({
        titulo: this.state.titulo,
        image: this.state.img,
        descricao: this.state.descricao,
        autor: localStorage.nome
      });
      this.props.history.replace('/');
    }else{
      this.setState({msgError: 'Preencha todos os campos!'})
    }
  }

  render() {
    return (
      <Container>
        <h1 className='title'>Olá, {this.state.nome}!</h1>
        <h6>Crie sua nova postagem!</h6>
        <Btn
          type='button'
          onClick={()=> this.setState({novo: !this.state.novo})}
        >
          {this.state.novo ? 'cancelar' : 'Novo post'}
        </Btn>

        {this.state.novo && 
          <Formulario onSubmit={this.postar}>
            {this.state.alert && <span className='alerta'>{this.state.alert}</span> }
            <label>Título</label>
            <input 
              type='text'
              placeholder='Título da sua postagem'
              autoComplete='off'
              autoFocus
              value={this.state.titulo}
              onChange={e => this.setState({titulo: e.target.value})}
            />
            <label>URL da Imagem</label>
            <input 
              type='file'
              placeholder='Cole a URL da imagem'
              autoComplete='off'
              value={this.state.img}
              onChange={e => this.setState({img: e.target.value})}
            />
            <label>Descrição</label>
            <textarea 
              type='text'
              placeholder='Descreva sua postagem'
              autoComplete='off'
              value={this.state.descricao}
              onChange={e => this.setState({descricao: e.target.value})}
            />
             <Btn
                type='submit'
              >
                Postar
              </Btn>
          </Formulario>
        }
      </Container>
    )
  }
}

export default withRouter(Dashboard);
