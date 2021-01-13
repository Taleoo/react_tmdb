import React from 'react';

const MovieHeader = (props) => {
	return (
		<div className='h-8 grid grid-row-1 text-center mt-5'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieHeader;