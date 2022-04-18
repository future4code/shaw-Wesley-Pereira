import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [comentario, setComentario] = useState('')
	const [postComentario, setPostComentario] = useState([])
	const onChangeComentario = (event) => {
		setComentario(event.target.value)
	}
	const enviarComentario = () => {
		const novoComentario = [...postComentario, comentario]
		setPostComentario(comentario)
	}
	console.log(postComentario)

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentario}
				onChange={onChangeComentario}
			/>
			<button onClick= {() => enviarComentario()}>Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario