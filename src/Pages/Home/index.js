import React, {Component} from 'react'
import { Container, Btn } from './styles';

import firebase from '../../services/firebase';

export default class Home extends Component{
    state = {
        posts: []
    }

    componentDidMount(){

        if(!firebase.getCurrent()){
            return this.props.history.replace('/login');
        }
        firebase.app.ref('posts').once('value', (snapshot)=>{
            let state = this.state;
            state.posts = [];
            snapshot.forEach(item => {
                state.posts.push({
                    key: item.key,
                    titulo: item.val().titulo,
                    image: item.val().image,
                    descricao: item.val().descricao,
                    autor: item.val().autor,
                })
            });
            state.posts.reverse();
            this.setState(state);
        })
    }

    render(){
        return(
            <Container>    
                <Btn to='/dashboard'>
                    Criar Novo Post
                </Btn>
                {this.state.posts.map(post => (
                    <article key={post.key}>
                        <header className='header'>
                            <strong>{post.titulo}</strong>
                            <span>Por: {post.autor}</span>
                        </header>
                        <img 
                            src={post.image} 
                            alt='Imagem do Post' 
                            className='img-post'
                        />
                        <footer>
                            <p>{post.descricao}</p>
                        </footer>
                    </article>
                ))}
            </Container>
        )
    }
}
