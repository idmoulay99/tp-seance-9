import React from 'react'
import styled from 'styled-components';

function Footer() {	
	const StyledFooter = styled.footer`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		padding-top: 15px;
		padding-bottom: 15px;
		text-align: center;
	`;

	const StyledContainer = styled.div`
		margin: 0 auto;
		width: 90%;
	`;


	
	return (
		<StyledFooter>
			<StyledContainer>
				Copyright &copy; Your Website 2022
			</StyledContainer>
		</StyledFooter>
	)
}

export default Footer