import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import {
  Container,
  ContainerId,
  ContainerMenssage,
  PostContainer,
  TextareaStyled,
  TextareaStyled2,
} from './style'
import PostButton from '../../components/PostButton/PostButton'
import { Hr } from '../../components/LoginButton/style'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import { goToFeed } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { CircularProgress } from '@mui/material'

function PostPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [form, onChange, clear] = useForm({ title: "", body: "" })
  const [isLoading, setIsLoading] = useState(false)

  
  const createPost =  () => {
    axios.post(`${BASE_URL}/posts`, form, {
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
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        setPost(response.data)
      })
  }, [post])

  if (!post) return null

  const onClickCard = (id) => {
    goToFeed(navigate, id)
  }

  const postLoad = post.map((post) => {
    return (
      <Container onClick={() => onClickCard(post.id)} key={post.id}>
        <ContainerId>enviado por: {post.title}</ContainerId> <br />
        
        <ContainerMenssage>{post.body}</ContainerMenssage>
      </Container>
    )
  })

  const onSubmit = (e) => {
    e.preventDefault()
    createPost()
    clear()
  }
  
  return (
    <div>
      
      <Header />

      <PostContainer>
        <form onSubmit={onSubmit}>
        <TextareaStyled2 name={"title"} value={form.title} onChange={onChange}  placeholder="Nome:"></TextareaStyled2>
        <TextareaStyled name={"body"}  value={form.body} onChange={onChange}  placeholder="Escreva seu post..."></TextareaStyled>
       
        <PostButton >
          {isLoading ? <CircularProgress color={"inherit"}/>: 'Postar'}
        </PostButton>
        </form>
        
        <Hr />

        {postLoad}
      </PostContainer>
    </div>
  )
}

export default PostPage
