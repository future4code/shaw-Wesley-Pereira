import React from 'react';
import Header from '../../components/Header/Header2';
import { PostContainer, TextareaStyled } from './style';
import FeedButton from '../../components/FeedButton/FeedButton';
import { Hr } from '../../components/LoginButton/style';
import useProtectedPage from '../../Hooks/useProtectedPage';
import CardFeed from '../../constants/Card/CardFeed';

function FeedPage() {
    useProtectedPage();
    return (
        <div>
            <Header />
            <PostContainer>
                <CardFeed />
            <TextareaStyled placeholder="Adicionar comentário"></TextareaStyled>
            <FeedButton />
            <Hr/>
            <CardFeed />
            </PostContainer>
        </div>
    );
}

export default FeedPage;