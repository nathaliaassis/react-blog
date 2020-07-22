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
      urlImg: '',
      msgError: '',
      progress: '',
    }

    this.postar = this.postar.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  componentDidMount()
  /*verifica se tem um usuário logado, 
  se não tiver redireciona para a tela de login*/{
    if(!firebase.getCurrent()){
      return this.props.history.replace('/');
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
          this.state.descricao !== '' &&
          this.state.url !== ''
      ){
      let posts = firebase.app.ref('posts');
      let key = posts.push().key;

      await posts.child(key).set({
        titulo: this.state.titulo,
        image: this.state.urlImg,
        descricao: this.state.descricao,
        autor: localStorage.nome
      });
      this.props.history.replace('/');
    }else{
      this.setState({msgError: 'Preencha todos os campos!'})
    }
  }
  handleFile = async (e) => {
    if(e.target.files[0]){
      const image = e.target.files[0];
      if(image.type === 'image/png' || image.type === 'image/jpeg'){
        await this.setState({img: image});
        await this.handleUpload();
      }else{
        alert('Envie uma imagem do tipo PNG ou JPG');
        this.setState({img: null});
        return null;
      }
    }
  }

  handleUpload = async () => {
    const {img} = this.state;
    const currentUid = firebase.getCurrentUid();

    const uploadTasks = firebase.storage.ref(`images/${currentUid}/${img.name}`).put(img);
    await uploadTasks.on('state_changed', snapshot =>{
      const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      this.setState({progress});
    }, error =>{
      console.log('Erro ao carregar imagem:' + error.message )
    }, ()=>{
      firebase.storage.ref(`images/${currentUid}`).child(img.name).getDownloadURL()
      .then(url => {
        this.setState({urlImg: url});
      })
    })
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
              className='input-file'
              onChange={this.handleFile}
            />
            <div>
              {this.state.urlImg ?
                <img 
                  src={this.state.urlImg} 
                  alt= 'imagem carregada' 
                  className='img-carregada'  
                /> : 
                this.state.progress
              }
            </div>
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
