import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  const StyledHero = styled.div`
    height: 400px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  ` 
  return (
    <StyledHero>Hero</StyledHero>
  )
}

export default Hero