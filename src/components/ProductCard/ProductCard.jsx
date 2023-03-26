import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { useCart } from "../../contexts/CartContext";

const ProductContainer = styled.div`
	display: grid;
	padding: 1rem;
	border: 1px solid black;
	border-radius: 1rem;
	width: 15rem;
	cursor: pointer;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 10rem;
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Title = styled.h2`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Price = styled.h3``;

const Ratings = styled.h3`
	display: flex;
	align-items: center;
`;

const Description = styled.div`
	white-space: nowrap;
	overflow-x: hidden;
	text-overflow: ellipsis;
`;

const CartButton = styled.button`
	display: flex;
	justify-self: center;
	justify-content: center;
	align-items: center;
	color: white;
	border: none;
	border-radius: 1rem;
	width: 100%;
	height: 2rem;
	:hover {
		outline: 1px solid black;
		cursor: pointer;
	}
`;

export const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const { addToCart, cart } = useCart();

	return (
		<ProductContainer
			onClick={() => {
				navigate(`/${product.id}`);
			}}>
			<ImageContainer>
				<Image src={product.image} alt={product.title} />
			</ImageContainer>
			<Title>{product.title}</Title>
			<Price>$ {product.price}</Price>
			<Ratings>
				<AiOutlineStar />
				{product.rating.rate}
			</Ratings>
			<Description>{product.description}</Description>

			<CartButton
				style={{
					backgroundColor: `${
						cart.find((item) => item.id === product?.id) ? "green" : "blue"
					}`,
				}}
				onClick={(e) => {
					e.stopPropagation();
					addToCart(product);
				}}>
				{cart.find((item) => item.id === product?.id)
					? "In Cart"
					: "Add To Cart"}
			</CartButton>
		</ProductContainer>
	);
};
