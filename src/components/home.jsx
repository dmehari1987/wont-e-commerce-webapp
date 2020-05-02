import React, { Component } from 'react';
import {ButtonContainer} from './styledButton';
import {Link} from 'react-router-dom';
import bg1 from './img/bg-1.jpg';

class Home extends Component {
	render() {
		return (
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={bg1} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							{/* <img src={wont}  style={{margin: 'auto'}} className="d-block w-50 mt-0" alt=""/> */}
							<Link to= '/history'>
								<ButtonContainer className="btn-home mr-3">
									our history
								</ButtonContainer>
							</Link>
							<Link to= '/products'>
								<ButtonContainer className="btn-home mr-3">
									show room
								</ButtonContainer>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



export default Home;
