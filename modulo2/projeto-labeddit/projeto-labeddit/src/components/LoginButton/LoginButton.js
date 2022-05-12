import React from 'react';
import { Link } from 'react-router-dom';

function LoginButton() {
    return (
        <div>
            <Link to="/login"></Link>
        </div>
    );
}

export default LoginButton;