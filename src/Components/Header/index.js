import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Background } from './styles';

export default function Header() {
    return (
        <Background>
            <Container>
                <h2>react blog</h2>
                <Link>Entrar</Link>
            </Container>
        </Background>
    )
}
