import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width : 100%;;
    height : 30px;
    background-color : #585B64;
    color: white;
    text-align: center;
    padding: 0;
`

function AdvertiseBar() {
  return (
    <Container>
        Super Deal, You can get Buy One Get One Free on First Order.
    </Container>
  )
}

export default AdvertiseBar