import React, { Component } from 'react';
import Title from '../title';
import BagColumns from './bagColumns';
import EmptyBag from './emptyBag';
import BagList from './bagList';
import { ProductConsumer } from '../../context';
import BagTotals from './bagTotals';

class Bag extends Component {
	render() {
		return (
			<section>
				<ProductConsumer>
					{(value) => {
						const { bag } = value;
						if (bag.length > 0) {
							return (
								<React.Fragment>
									<Title name="your" title="bag" />
									<BagColumns />
									<BagList value={value} />
									<BagTotals value={value} />
								</React.Fragment>
							);
						} else {
							return <EmptyBag />;
						}
					}}
				</ProductConsumer>
			</section>
		);
	}
}

export default Bag;
