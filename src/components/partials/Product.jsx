import React from 'react'
import styled from 'styled-components';


function Product({name, price}) {

  const StyledProduct = styled.div`
    width: 20%;
    padding: 10px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
	`;

  const ProductName = styled.h1`
    font-size: 2rem;
    margin-top: .75rem;
    margin-bottom: .75rem;
  `;

  const AddToCardButton = styled.button`
    border: 1px solid #000;
    background: transparent;
    color: #000;
    border-radius: 5px;
    font-size: .75rem;
    padding: 3px 15px;
    &:hover {
      background-color: #000;
      color: #FFF;
    }
  `;

  return (
    <StyledProduct>
      <div>
        <img 
          src='https://image-placeholder.com/images/actual-size/450x300.png' 
          alt='product'
        />
        <ProductName>{name}</ProductName>
        <p>{`$${price}.00`}</p>
        <AddToCardButton>Add to Card</AddToCardButton>
      </div>
    </StyledProduct>
  )
}

export default Product