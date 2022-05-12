import React from 'react';
import Header from '../../components/Header/Header';
import { PostContainer, TextareaStyled } from './style';
import PostButton from '../../components/PostButton/PostButton';
import { Hr } from '../../components/LoginButton/style';

function PostPage() {
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