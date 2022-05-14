import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header2';
import { PostContainer, TextareaStyled, Container, ContainerId, ContainerMenssage } from './style';
import FeedButton from '../../components/FeedButton/FeedButton';
import { Hr } from '../../components/LoginButton/style';
import useProtectedPage from '../../Hooks/useProtectedPage';

import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams } from 'react-router-dom';
import useForm from '../../Hooks/useForm'

function FeedPage() {
    
    useProtectedPage();
    const [form, onChange, clear] = useForm({body: "" })
    const [resposta, setResposta] = useState(null);
    const params = useParams()
    
    const createComment =  () => {
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
          headers: {
            
            Authorization: localStorage.getItem("token") 
          }
        }).then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }
        
    
    

    useEffect(() => {
        axios.get(`${BASE_URL}/posts/${params.id}/comments`,  {
            headers: {
                Authorization: localStorage.getItem("token")
            }, 
        }).then((response) => {
            setResposta(response.data);
            
        })
    }, [resposta])
  
    if(!resposta) return null;
  
    const respostaLoad = resposta.map((resposta) => {
        return(
          <Container  key={resposta.id}>
          <ContainerId> 
            enviado por: {resposta.userId}
            </ContainerId> <br/>
          {resposta.title}
          <ContainerMenssage>  
            {resposta.body} 
            </ContainerMenssage>
          </Container>
         
        )
  })

  const onSubmit = (e) => {
    e.preventDefault()
    createComment()
    clear()
  }
  
    return (
        <div>
            <Header />
            
            <PostContainer>
                <form onSubmit={onSubmit}>
            <TextareaStyled onChange={onChange} name={"body"} placeholder="Adicionar comentário"></TextareaStyled>
            <FeedButton />
            </form>
            
            <Hr/>
            {respostaLoad}
            </PostContainer>
        </div>
    );
}

export default FeedPage;