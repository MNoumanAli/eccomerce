import React from 'react'
import styled from 'styled-components'
import main from "../Assets/pictures/main-pic.jpg"

const Container = styled.div`
    height : 88vh;
    display: flex;
    align-items: center;
    width:  100%;
    justify-content: space-between;
`
const ImageContainer = styled.div` 
    width: 45%; 
`
const Image = styled.img`
    width: 70%; 
    height: 500px;
    object-fit: cover
`
const DescContainer = styled.div`
    width: 50%; 
`
const Container1 = styled(Container)`
    flex-direction : column;
    justify-content : center;
    height : initial;
`
const Title = styled.p`
    font-size : 4rem;
    font-weight: bold;
    margin : 0;
    margin-bottom : 0.3em 
`
const Description = styled.p`
    font-size : 1.4rem
`
const ShopButton = styled.p`
    padding : 10px 20px;
    border 1px solid black;
    box-shadow : 4px 4px #5D6067
`
function Hero() {
  return (
    <Container>
        <ImageContainer>
            <Container1>
                <Image src={`${main}`} alt="img"/>
            </Container1>
        </ImageContainer>
        <DescContainer>
            <Container1>
                <Title>
                    Summer Sale
                </Title>
                <Description>
                    Don't compormise on style, get flat 30% off for new arrivals.
                </Description>
                <ShopButton>
                    Shop Now
                </ShopButton>
            </Container1>
        </DescContainer>
    </Container>
  )
}

export default Hero