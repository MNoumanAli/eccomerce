import React from 'react'
import pro1 from "../Assets/pictures/pro1.jpg"
import pro2 from "../Assets/pictures/pro2.jpg"
import pro3 from "../Assets/pictures/pro3.jpg"
import pro4 from "../Assets/pictures/pro4.jpg"
import pro41 from "../Assets/pictures/pro41.jpg"
import styled from 'styled-components'

const Container = styled.div`
    padding : 40px;
    display : grid;
    grid-template-columns: repeat(1fr, 6);
    grid-template-areas : "pic1 pic1 pic2 pic2 pic3 pic3"
                            "pic4 pic4 pic4 pic7 pic7 pic7";
    grid-template-rows :  400px 200px; 
    grid-gap : 40px
`

const ImageContainer = styled.div`
    position : relative;
   
    grid-area : pic1;
    text-align: center;
    display : flex;
    justify-content: center;
    align-items: center;
`
const Image1Container = styled(ImageContainer)`
    grid-area : pic2
`
const Image2Container = styled(ImageContainer)`
    grid-area : pic3
`
const Image3Container = styled(ImageContainer)`
    grid-area : pic4
`
const Image4Container = styled(ImageContainer)`
    grid-area : pic7
`
const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
    object-position: center;
    filter : blur(1px)
`
const Information =  styled.div`
    display : inline-block;
    position : absolute;
  
`
const Button = styled.p`
    display : inline-block;
    font-size : 1.3rem;
    margin: 0;
    background-color : white;
    color : black;
    border : 1px solid black;
    padding : 7px 14px; 
`

export default function Products() {
  return (
    <Container>
        <ImageContainer>
            <Image src={pro4}/>
            <Information><p style = {{fontSize : "2.7rem", margin:"3px", color : "white"}}>Long Wear</p>
                <Button>shop Now</Button>
            </Information>
        </ImageContainer>
        <Image1Container>
            <Image src={pro1}/>
            <Information><p style = {{fontSize : "2.7rem", margin:"3px", color : "white"}}>Shirt Style</p>
            <Button>shop Now</Button>
            </Information>
           
        </Image1Container>
        <Image2Container>
            <Image src={pro2}/>
            <Information><p style = {{fontSize : "2.7rem", margin:"3px", color : "white"}}>Light Jacket</p>
            <Button>shop Now</Button>
            </Information>
            
        </Image2Container>
        <Image3Container>
            <Image src={pro3}/>
            <Information><p style = {{fontSize : "2.7rem", margin:"3px", color : "white"}}>Perfect Jeans</p>
            <Button>shop Now</Button>
            </Information>
        </Image3Container>
        <Image4Container>
            <Image src={pro41}/>
            <Information>
            <p style = {{fontSize : "2.7rem", margin:"3px", color : "white"}}>New Dress</p>
            <Button>shop Now</Button>
            </Information>
        </Image4Container>
    </Container>
  )
}
