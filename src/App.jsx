import { Routes, Route } from "react-router-dom";
import { ProductsList, Product, Cart, Header } from "./components";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<ProductsList />}></Route>
				<Route path='/:productId' element={<Product />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
			</Routes>
		</>
	);
}

export default App;
