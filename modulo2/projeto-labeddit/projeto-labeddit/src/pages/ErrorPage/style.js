import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 200px);
 `

export const H1 = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 5rem;
  color: #FE7E02;
  `
export const H2 = styled.h2`
color: #A3A3A3;
`

export const link = {
  textDecoration: 'none',
  color: '#FE7E02',
  fontSize: '1.5rem',
  fontWeight: '600',
  marginTop: '1rem',
  border: '1px solid #FE7E02',
  padding: '0.2rem',
  borderRadius: '27px',
}