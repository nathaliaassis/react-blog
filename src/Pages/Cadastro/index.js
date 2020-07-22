import React, {Component} from 'react'
import { Container, Formulario } from './styles';
import firebase from '../../services/firebase';
import { withRouter } from 'react-router-dom';

class Cadastro extends Component{

    constructor(props){
      super(props);

      this.state = {
        nome: '',
        email: '',
        senha: ''
      }
      

      this.cadastrar = this.cadastrar.bind(this);
      this.register = this.register.bind(this);
    }

    register(e){
      e.preventDefault();
      this.cadastrar();
    }

    cadastrar = async () => {
      const {nome, email, password} = this.state;

      try{
        await firebase.register(nome, email, password);
        this.props.history.replace('/dashboard');
      }catch(error){
        console.log(`${error.code}: ${error.message} `)
      }
    }
    render(){
        return(
            <Container>    
               <Formulario onSubmit={this.register}>
                  <h4 className='title'>CRIAR CONTA</h4>
                  <label className=''>
                    Nome
                  </label>
                  <input 
                    type='text'
                    autoComplete='off'
                    autoFocus
                    value={this.state.nome}
                    onChange={(e)=> this.setState({nome: e.target.value})}
                    placeholder='Digite o seu e-mail'
                  />
                  <label className=''>
                    E-mail
                  </label>
                  <input 
                    type='email'
                    autoComplete='off'
                    value={this.state.email}
                    onChange={(e)=> this.setState({email: e.target.value})}
                    placeholder='Digite o seu e-mail'
                  />
                  <label>
                    Senha
                  </label>
                  <input 
                    type='password'
                    autoComplete='off'
                    value={this.state.password}
                    onChange={(e)=> this.setState({password: e.target.value})}
                    placeholder='Digite a sua senha'
                  />
                  <button
                    type='submit'
                  >
                    Cadastrar
                  </button>
               </Formulario>
            </Container>
        )
    }
}

export default withRouter(Cadastro)
