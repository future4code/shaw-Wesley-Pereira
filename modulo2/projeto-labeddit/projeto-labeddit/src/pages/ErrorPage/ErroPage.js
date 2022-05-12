import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

function ErrorPage() {
    return (
        <div>
            <Header />
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    );
}

export default ErrorPage;