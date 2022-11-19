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
   
`
const Title = styled.div`
   font-size : 2rem;
   font-weight : bolder;
   margin-bottom : 1em;
`
const Heading = styled.div`
   font-size : 1.4rem;
   font-weight : bold;
   margin-bottom : 1.8em;
`
const Links = styled.div`
   display : flex;
   justify-content : space-between;
   margin-right : 4em;
   align-items : center;
`
const LinkCol = styled.div`
   
`

const LinkRow = styled.p`
   font-size : 1rem;
   padding : 0;
   margin : 0;
   margin-bottom : 1em;
`

function Footer() {
  return (
    <Container>
        <ChildContainer>
          <Title>
            ClickIT
          </Title>
          <p>
            Our designs are made with a lot of love and attention to detail in 100% breathable cotton.
            With the best quality fabric and stitching, everything at UXM is made to fit and feel like a
            dream! Our products are carefully crafted to take your comfort in stride without compromising on style
          </p>
        </ChildContainer>
            
        <ChildContainer>
            <Heading>
              Useful Links
            </Heading>

            <Links>
              <LinkCol>
                <LinkRow> Home</LinkRow>
                <LinkRow> Man Fashion</LinkRow>
                <LinkRow> Accessiories</LinkRow>
                <LinkRow> Order Tracking</LinkRow>
                <LinkRow> Wishlist</LinkRow>
              </LinkCol>
              <LinkCol>
                <LinkRow> Cart</LinkRow>
                <LinkRow> Woman Fashion</LinkRow>
                <LinkRow> My Account</LinkRow>
                <LinkRow> Terms</LinkRow>
                <LinkRow> Rights</LinkRow>
              </LinkCol>
            </Links>
        </ChildContainer>

        <ChildContainer>
          <Heading>
            Contacts       
          </Heading>
          <LinkRow>
            C1 Ghani Colony, Wahadat Road , Lahore
          </LinkRow>
          <LinkRow>
            mnoumanali001@gmail.com
          </LinkRow>
          <LinkRow>
            03088697187
          </LinkRow>
        </ChildContainer>
    </Container>
  )
}

export default Footer