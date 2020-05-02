import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './styledButton';
import logo from '../logo.png';

class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to="/">
					<img style={{ width: 150 }} alt="" src={logo} className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-item-center">
					<Link className="nav-link" to="aboutus">
						<li className="nav-item ml-5">About</li>
					</Link>
					<Link className="nav-link" to="products">
						<li className="nav-item ml-5">Products</li>
					</Link>
				</ul>
				<Link to="/bag" className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-shopping-bag"></i>
						</span>
						My Bag
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite);
		fornt-size: 1.3rem;
		text-transform: capitalize !important;
		background: transparent !important;
	}
`;

export default Navbar;
