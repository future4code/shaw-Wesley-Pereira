import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Container, ContainerId, ContainerMenssage, PostContainer, TextareaStyled } from './style'
import PostButton from '../../components/PostButton/PostButton'
import { Hr } from '../../components/LoginButton/style'
import useProtectedPage from '../../Hooks/useProtectedPage'
import CardPost from '../../constants/Card/CardPost'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'


function PostPage() {
  useProtectedPage()
 
  const [post, setPost] = useState(null);

  useEffect(() => {
      axios.get(`${BASE_URL}/posts`, {
          headers: {
              Authorization: localStorage.getItem("token")
          }
      }).then((response) => {
          setPost(response.data);
      })
  }, [])

  if(!post) return null;

  console.log(post)
  
    const postLoad = post.map((post) => {
          return(
            <Container>
            <ContainerId> 
              enviado por: {post.userId}
              </ContainerId> <br/>
            
            <ContainerMenssage>  
              {post.body} 
              </ContainerMenssage>
            </Container>
           
          )
    })
  return (
    <div>
      <Header />

      <PostContainer>
        <TextareaStyled placeholder="Escreva seu post..."></TextareaStyled>
        <PostButton />
        <Hr />
        
        {postLoad}
       
        
      </PostContainer>
    </div>
  )
}

export default PostPage
