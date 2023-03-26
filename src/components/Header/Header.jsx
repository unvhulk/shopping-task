import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderContainer = styled.header`
	background-color: blue;
	color: white;
	height: 3rem;
	width: 100%;
	display: grid;
	grid-template-columns: 5fr 1fr;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`;

const LeftHeading = styled.h1``;
const RightHeading = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 0 1rem 0 0;
`;
const RighSubHeaders = styled.div`
	font-size: 1.2rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	padding: 1rem;
	cursor: pointer;
`;

export const Header = () => {
	const navigate = useNavigate();

	return (
		<div>
			<HeaderContainer>
				<LeftHeading onClick={() => navigate("/")}>
					Online Shopping Site
				</LeftHeading>
				<RightHeading>
					<RighSubHeaders onClick={() => navigate("/")}>
						Products
					</RighSubHeaders>
					<RighSubHeaders onClick={() => navigate("/cart")}>
						<AiOutlineShoppingCart />
						Cart
					</RighSubHeaders>
				</RightHeading>
			</HeaderContainer>
		</div>
	);
};
