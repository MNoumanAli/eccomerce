import React from 'react'
import styled from 'styled-components'
import Login from '../../Components/Login'

const Container = styled.div`
height : 100vh;
display : flex ;
justify-content : center;
align-items : center;
`


function LoginPage() {
  return (
    <Container>
      <Login/>
    </Container>
  )
}

export default LoginPage