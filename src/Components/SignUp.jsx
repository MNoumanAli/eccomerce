import React from 'react'
import styled from 'styled-components' 
import {useNavigate }from 'react-router-dom'
const Container = styled.div`
    display : flex ;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    box-sizing : border-box;
    border : 1px solid black;
    padding : 1em;
    width : 30%;
    input,button{
     
      padding : 0.4em 0.4em;
      font-size : 1.3rem;
      margin-bottom : 1em;
    }
    input{
      width : 90%;
    }
    button{
      width : 40%;
      align-self: center;
    }
`

function SignUp() {
  const navigate = useNavigate()
    function onSubmit()
    {
      navigate('/login')
    }
  return (
    <Container>
        <input type='text' placeholder = 'Username'/>
        <input type='text'  placeholder='Email'/>
        <input type='password' placeholder='PASSWORD'/>
        <button  onClick={onSubmit}>Register Yourself</button>
    </Container>
  )
}

export default SignUp