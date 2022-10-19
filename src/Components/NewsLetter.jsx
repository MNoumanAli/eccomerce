import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display : flex;
  justify-content  : center;
  align-items : center;
  width : 100%;
  height : 60vh;
  background-color: rgb(204, 176, 176);;
`
const InnerContainer = styled.div`
  width : 40%;
  text-align: center;
`
const Tag = styled.p`
    font-size : 3rem;
    font-weigth : bolder;
    margin: 0;
    margin-bottom : 10px;
`
const Tagline = styled.p`
  font-size : 1.4rem;
  margin: 0;
margin-bottom : 17px;
`
const Input = styled.input`
  font-size : 1.3rem;
  box-sizing: border-box;
  width : 80%;
  padding : 17px
`
const Button = styled.p`
  font-size : 1.3rem;
  text-align : center;
  display: inline-block;
  box-sizing: border-box;
  width : 20%;
  padding : 17px ;
  margin: 0;
  color : white;
  background-color : green
`
function NewsLetter() {
  return (
   <Container>
      <InnerContainer>
          <Tag>
            Newsletter
          </Tag>
          <Tagline>Get Timely update from new Products</Tagline>
          <Input type="text" placeholder='Enter your Email...'/>
          <Button>Send</Button>
      </InnerContainer>
   </Container>
  )
}

export default NewsLetter