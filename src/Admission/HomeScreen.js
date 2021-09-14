import React from 'react'
import styled from 'styled-components'
import HomeDesign from './HomeDesign'

const HomeScreen = () => {
  return (
   <Container>
     <Wrapper>
       <HomeDesign/>
     </Wrapper>
   </Container>
  )
}

export default HomeScreen

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
padding-top: 50px;
font-family: Poppins;
color: white;
  background-color: rgb(17,17,17);
`
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center
;
`