import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top : 30px;
    width : 100%;
    display : flex; 
    justify-content : space-evenly;
    align-items: center;
`
const ChildContainer = styled.div`
    width : 30%;
    height : 300px;
    border: 1px solid black
`
function Footer() {
  return (
    <Container>
        <ChildContainer>

        </ChildContainer>

        <ChildContainer>
            
        </ChildContainer>

        <ChildContainer>
            
        </ChildContainer>
    </Container>
  )
}

export default Footer