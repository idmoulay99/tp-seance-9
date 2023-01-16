import React from 'react'
import styled from 'styled-components'
const Nav = () => {
    const StyledUl = styled.ul`
        display: flex;
        list-style: none;
        `
    const StyledLi = styled.li`
        margin-right: 7px;
        `
    const StyledAnchor = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color: #000000aa;
    `
    const StyledNav = styled.nav`
        margin-right: auto;
        margin-left: 15px;
    `
  return (
    <StyledNav>
        <StyledUl>
            <StyledLi><StyledAnchor href="home">Home</StyledAnchor></StyledLi>
            <StyledLi><StyledAnchor href="about">About</StyledAnchor></StyledLi>
            <StyledLi><StyledAnchor href="shop">Shop</StyledAnchor></StyledLi>
        </StyledUl>
    </StyledNav>
  )
}

export default Nav