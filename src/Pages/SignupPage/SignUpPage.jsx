import React from 'react'
import styled from 'styled-components'
import SignUp from '../../Components/SignUp'

const Container = styled.div`
height : 100vh;
display : flex ;
justify-content : center;
align-items : center;
`


function SignUpPage() {
  return (
    <Container>
      <SignUp/>
    </Container>
  )
}

export default SignUpPage