import React from 'react';

const MovieHeader = (props) => {
	return (
		<div className='grid grid-cols-1'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieHeader;