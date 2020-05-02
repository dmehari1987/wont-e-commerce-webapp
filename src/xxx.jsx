import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ProductList from './components/productList';
import Details from './components/details';
import Modal from './components/modal';
import Bag from './components/bag/bag';
import Default from './components/default';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/products" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/bag" component={Bag} />
				<Route component={Default} />
			</Switch>
			<Modal />
		</React.Fragment>
	);
}

export default App;
