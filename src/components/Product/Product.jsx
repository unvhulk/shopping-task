import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { useCart } from "../../contexts/CartContext";

const ProductContainer = styled.main`
	margin: 1rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr 4fr;
	outline: 1px solid black;
	border-radius: 1rem;
`;

const LeftContainer = styled.section`
	width: 100%;
`;
const ImageContainer = styled.img`
	max-width: 100%;
`;
const RightContainer = styled.section`
	padding-left: 1rem;
	display: grid;
	align-items: center;
	grid-template-rows: 1fr 1fr 1fr 2fr;
`;

const Title = styled.h1``;

const Price = styled.h2``;

const Ratings = styled.h3`
	display: flex;
	align-items: center;
`;

const Description = styled.div``;

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

export const Product = () => {
	const [product, setProduct] = useState();
	const { addToCart, cart } = useCart();
	const { productId } = useParams();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productId}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);

	return (
		product && (
			<ProductContainer>
				<LeftContainer>
					<ImageContainer src={product.image} alt={product.title} />
					<CartButton
						style={{
							backgroundColor: `${
								cart.find((item) => item.id === product?.id) ? "green" : "blue"
							}`,
						}}
						onClick={() => {
							addToCart(product);
						}}>
						{cart.find((item) => item.id === product?.id)
							? "In Cart"
							: "Add To Cart"}
					</CartButton>
				</LeftContainer>
				<RightContainer>
					<Title>{product.title} </Title>
					<Price>$ {product.price} </Price>
					<Ratings>
						<AiOutlineStar />
						{product.rating.rate} || {product.rating.count} ratings
					</Ratings>
					<Description>{product.description} </Description>
				</RightContainer>
			</ProductContainer>
		)
	);
};
