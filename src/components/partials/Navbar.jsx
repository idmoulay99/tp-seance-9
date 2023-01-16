import React from 'react'
import Nav from './Nav'
import Container from '../styledComponent/Container'
import styled from 'styled-components'
import { BsFillCartFill } from 'react-icons/bs'
const Navbar = ({children}) => {
    const StyledNavbar = styled.div`
        /* display: flex; */
        background: #bdc3c7;
        padding: 18px 0;
    ` 
    const StyledFlex = styled.div`
        display: flex;
        align-items: center;
    ` 
    const StyledCart = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid;
        padding: 5px 10px;
        border-radius: 4px;
        svg {
            margin-right: 5px;

        }
        span:nth-child(2) {
            margin-right: 3px;
        }
        span:nth-child(3) {
            margin-left: 3px;
            background-color: #000;
            padding: 5px;
            border-radius: 50%;
            color: #fff;
            display: inline-block;
            width: 20px; 
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
  return (
    <StyledNavbar>
        <Container>
            <StyledFlex>
                <div>Start Bootstrap</div>
                <Nav />
                <StyledCart>
                    <BsFillCartFill /> 
                <span>Cart</span> 
                <span>0</span>
                </StyledCart>
            </StyledFlex>
        </Container>
    </StyledNavbar>
  )
}

export default Navbar