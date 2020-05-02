import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './styledButton';

class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { id, img, info, price, title, inBag } = value.detailProduct;
					return (
						<div className="container py-5">
							{/* title */}
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
								</div>
							</div>
							{/* end title */}
							{/* product info */}
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} className="img-fluid" alt="product" />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h2>Model: {title} </h2>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
										<strong>
											Price: <span>$</span>
											{price}
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										Some info about Product:
									</p>
									<p className="text-muted lead">{info}</p>
									<div>
										<Link to="/products">
											<ButtonContainer>Back to Productes</ButtonContainer>
										</Link>
										<ButtonContainer
											cart
											disabled={inBag ? true : false}
											onClick={() => {
												value.addToBag(id);
												value.openModal(id);
											}}
										>
											{inBag ? inBag : 'add to bag'}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default Details;
