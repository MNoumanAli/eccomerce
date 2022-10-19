import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    box-sizing: border-box;
    display : flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height : 70px;
    border-bottom: 2px solid black;
`
const Left = styled.div`
    box-sizing: border-box;
    padding : 0;
    margin: 0;
    margin-left : 2em;
`
const Right = styled.div`
    margin-right : 2em;
    display: flex;
    align-items : center;
    justify-content: space-between;
    width: 20%;
`

const Registor = styled.p`
    padding : 0;
    margin : 0
`
const SignIN = styled.p`
    padding : 0;
    margin : 0
`

const Title = styled.p`
    font-size: 2rem;
    font-weight: bolder;
`
function NavBar() {
  return (
    <Container>
        <Left>
            <Title>
                ClickIT.
            </Title>
        </Left>
    

        <Right>
            <Registor>
                Registor
            </Registor>
            <SignIN>
                Sign IN
            </SignIN>
        </Right>
    </Container>
  )
}

export default NavBar