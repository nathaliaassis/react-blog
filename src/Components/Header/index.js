import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Background } from './styles';
import firebase from '../../services/firebase';

export default function Header() {
    return (
        <Background>
            <Container>
                <Link to='/'>
                    <h2>react blog</h2>
                </Link>
                <div>
                <Link to='/login'>Entrar</Link>
                <a
                    role='button'
                    type='button'
                    href='/'
                    className='sair'
                    onClick={()=> firebase.logout()}
                >
                    Sair
                </a>
                </div>
            </Container>
        </Background>
    )
}
