import React from 'react'
import styled from 'styled-components';
import Product from './Product'

function Products() {
  
  const products = [
    {id: 1, name: 'product1', price: 18},
    {id: 2, name: 'product1', price: 17},
    {id: 3, name: 'product1', price: 16},
    {id: 4, name: 'product1', price: 15},
    {id: 5, name: 'product1', price: 14},
  ]

  const StyledContainer = styled.div`
		margin: 0 auto;
		width: 90%;
	`;

  const StyledMain = styled.main`
    background-color: #EEE;
  `;

  const StyledProducts = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #000;
  `;

  return (
    <StyledMain>
        <StyledContainer>
          <StyledProducts>
            {
              products.map(({id, name, price}) => <Product key={id} name={name} price={price}/>)
            }
          </StyledProducts>
        </StyledContainer>
    </StyledMain>
  )
}

export default Products