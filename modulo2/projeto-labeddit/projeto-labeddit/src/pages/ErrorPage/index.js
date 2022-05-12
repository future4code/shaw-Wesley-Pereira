import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    );
}

export default ErrorPage;