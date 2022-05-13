import React from 'react';
import Header from '../../components/Header/Header';
import { PostContainer, TextareaStyled } from './style';
import PostButton from '../../components/PostButton/PostButton';
import { Hr } from '../../components/LoginButton/style';
import useProtectedPage from '../../Hooks/useProtectedPage';

function PostPage() {
    useProtectedPage();
    return (
        <div>
            <Header />
            <PostContainer>
            <TextareaStyled placeholder="Escreva seu post..."></TextareaStyled>
            <PostButton />
            <Hr/>
            </PostContainer>
        </div>
    );
}

export default PostPage;