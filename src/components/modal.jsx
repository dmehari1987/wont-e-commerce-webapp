import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './styledButton';

class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { modalOpen, closeModal } = value;
					const { img, title, price } = value.modalProduct;

					if (!modalOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className="conatiner">
									<div className="row">
										<div
											id="modal"
											className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
										>
											<h5>item added to the bag</h5>
											<img src={img} className="img-fluid" alt="product" />
											<h5>{title}</h5>
											<h5 className="text-muted">Price: ${price}</h5>
											<Link to="/products">
												<ButtonContainer
													onClick={() => {
														closeModal();
													}}
												>
													Store
												</ButtonContainer>
											</Link>
											<Link to="/bag">
												<ButtonContainer
													cart
													onClick={() => {
														closeModal();
													}}
												>
													Go to bag
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}

export default Modal;

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal {
		background: var(--mainWhite);
	}
`;
