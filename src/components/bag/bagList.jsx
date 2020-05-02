import React from 'react';
import BagItem from './bagItem';

const BagList = ({ value }) => {
	const { bag } = value;
	return (
		<div className="container-fluid">
			{bag.map((item) => {
				return <BagItem key={item.id} item={item} value={value} />;
			})}
		</div>
	);
};

export default BagList;
