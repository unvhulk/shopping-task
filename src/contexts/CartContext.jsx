import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const addToCart = (newCartItem) => {
		setCart((prev) => {
			return prev.find((cartItem) => cartItem.id === newCartItem.id)
				? prev
				: [...prev, { ...newCartItem, quantity: 1 }];
		});
	};

	const removeFromCart = (cartItemid) => {
		console.log(cartItemid);
		setCart((prev) => prev.filter((item) => item.id !== cartItemid));
	};

	const updateCartQty = (id, qty) => {
		setCart((prev) => {
			return prev.map((item) =>
				item.id === id ? { ...item, quantity: qty } : item
			);
		});
	};

	return (
		<CartContext.Provider
			value={{ cart, setCart, addToCart, removeFromCart, updateCartQty }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider, CartContext };
