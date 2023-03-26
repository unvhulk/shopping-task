import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";

const CartContainer = styled.main`
	padding: 1rem;
	display: grid;
	grid-template-rows: repeat(auto-fill, minmax(180px, 1fr));
	gap: 10px;
`;

const CartCard = styled.div`
	padding: 1rem;
	outline: 1px solid black;
	border-radius: 1rem;
	display: grid;
	grid-template-columns: 1fr 3fr;
`;

const LeftContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 10rem;
`;
const RightContainer = styled.div`
	display: grid;
`;

const Image = styled.img`
	max-width: 100%:
	max-height: 100%:

`;

const Quantity = styled.div``;

const QuantityInput = styled.input`
	width: 5rem;
	padding: 5px;
`;
const QuantityButton = styled.button`
	padding: 5px;
	width: 2rem;
`;

const RemoveFromCartButton = styled.button`
	display: flex;
	justify-self: start;
	justify-content: center;
	align-items: center;
	background-color: red;
	color: white;
	border: none;
	border-radius: 1rem;
	width: 20%;
	height: 2rem;
	margin-top: 5px;

	:hover {
		transition: opacity 0.5 linear;
		color: red;
		background-color: white;
		outline: 1px solid black;
	}
`;

export const Cart = () => {
	const { cart, removeFromCart, updateCartQty } = useCart();
	return (
		<CartContainer>
			{cart.length ? (
				cart.map((product) => (
					<CartCard>
						<LeftContainer>
							<Image src={product.image} alt={product.title} />
						</LeftContainer>
						<RightContainer>
							<h2>{product.title}</h2>
							<h3 className=''>$ {product.price}</h3>
							<h3 style={{ display: "flex", alignItems: "center" }}>
								<AiOutlineStar />
								{product.rating.rate}
							</h3>

							<Quantity>
								<QuantityButton
									onClick={() => {
										updateCartQty(
											product.id,
											product.quantity - 1 < 1 ? 1 : product.quantity - 1
										);
									}}>
									-
								</QuantityButton>
								<QuantityInput
									type='number'
									value={product.quantity}
									onChange={(e) => {
										updateCartQty(product.id, e.target.value);
									}}></QuantityInput>
								<QuantityButton
									onClick={() => {
										updateCartQty(product.id, product.quantity + 1);
									}}>
									+
								</QuantityButton>
							</Quantity>

							<RemoveFromCartButton
								onClick={() => {
									removeFromCart(product.id);
								}}>
								Remove from cart
							</RemoveFromCartButton>
						</RightContainer>
					</CartCard>
				))
			) : (
				<h1
					style={{
						display: "grid",
						justifyContent: "center",
						alignItems: "center",
					}}>
					No Items in Cart!!!
				</h1>
			)}
		</CartContainer>
	);
};
