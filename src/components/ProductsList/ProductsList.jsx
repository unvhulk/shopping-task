import React, { useEffect, useState } from "react";
import { ProductCard } from "../index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const ProductsPageContainer = styled.main`
	padding: 1rem;
`;

const ProductsListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 10px;
`;

const SearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 1rem;
	margin: 1rem 0;
	height: 1.8rem;
	border-radius: 1rem;
`;
const SearchBar = styled.input`
	width: 30rem;
	border-radius: 1rem 0 0 1rem;
	padding: 10px 1rem;
	:focus {
		border-radius: 1rem 0 0 1rem;
	}
`;

export const ProductsList = () => {
	const [productsList, setProductsList] = useState([]);
	const [searchText, setSearchText] = useState("");

	const length = productsList.filter((product) =>
		product.title.toLowerCase().includes(searchText.toLowerCase())
			? product
			: null
	).length;

	const fetchProducts = () => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				setProductsList(json);
			});
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<ProductsPageContainer>
			<SearchBarContainer>
				<SearchBar
					value={searchText}
					placeholder='Search for products...'
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<AiOutlineSearch
					style={{
						backgroundColor: "blue",
						color: "white",
						fontSize: "1.5rem",
						borderRadius: "0 1rem  1rem 0",
						outline: "3px solid black",
						padding: "7px 1rem",
					}}
				/>
			</SearchBarContainer>
			<section>
				<h2>Showing {length} products: </h2>
				<ProductsListContainer>
					{length ? (
						productsList
							.filter((product) =>
								product.title.toLowerCase().includes(searchText.toLowerCase())
									? product
									: null
							)
							.map((product) => (
								<ProductCard product={product} key={product.id} />
							))
					) : (
						<h1 style={{ gridColumn: "3/4" }}>No Products found!!</h1>
					)}
				</ProductsListContainer>
			</section>
		</ProductsPageContainer>
	);
};
