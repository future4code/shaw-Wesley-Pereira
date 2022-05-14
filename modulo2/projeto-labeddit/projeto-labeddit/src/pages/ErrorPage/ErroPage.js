import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Container, H1, H2, link } from './style';

function ErrorPage() {
    return (<div>
        <Header />
        <Container>
            
            <H1>404</H1>
            <H2>Página não encontrada!</H2>
            <Link to="/" style={link}>Voltar</Link>
        </Container>
        </div>
    );
}

export default ErrorPage;