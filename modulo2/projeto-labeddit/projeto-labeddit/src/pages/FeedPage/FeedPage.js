import React from 'react';
import Header from '../../components/Header/Header';
import { PostContainer, TextareaStyled } from './style';
import FeedButton from '../../components/FeedButton/FeedButton';
import { Hr } from '../../components/LoginButton/style';
import useProtectedPage from '../../Hooks/useProtectedPage';

function FeedPage() {
    useProtectedPage();
    return (
        <div>
            <Header />
            <PostContainer>
            <TextareaStyled placeholder="Adicionar comentário"></TextareaStyled>
            <FeedButton />
            <Hr/>
            </PostContainer>
        </div>
    );
}

export default FeedPage;