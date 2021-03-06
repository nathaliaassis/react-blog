import React, {Component} from 'react'
import { Container, Formulario } from './styles';
import firebase from '../../services/firebase';
import { Link, withRouter } from 'react-router-dom';
class Login extends Component{

    constructor(props){
      super(props);

      this.state = {
        email: '',
        senha: ''
      }

      this.entrar = this.entrar.bind(this);
    }

    componentDidMount(){
      if(firebase.getCurrent()){
        return this.props.history.replace('dashboard');
      }
    }

    entrar = async (e) => {
      e.preventDefault();

      const {email, password} = this.state;

      try{
        await firebase.login(email, password).catch(error =>{
          if(error.code === 'auth/user-not-found'){
            alert('Este usuário não existe')
          }else{
            alert(`Código de erro: ${error.code}`)
          }
        }); 
        this.props.history.replace('/dashboard');
      }catch(error){
        alert(`${error.message}: ${error.message} `)
      }
    }
    render(){
        return(
            <Container>    
               <Formulario onSubmit={this.entrar}>
                  <h4 className='title'>LOGIN</h4>
                  <label className=''>
                    E-mail
                  </label>
                  <input 
                    type='email'
                    autoComplete='off'
                    autoFocus
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
                    entrar
                  </button>
                  <Link to='/criar-conta'>
                    Quero me cadastrar
                  </Link>
               </Formulario>
            </Container>
        )
    }
}

export default withRouter(Login);