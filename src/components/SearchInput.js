import React from 'react';

const SearchInput = (props) => {
	return (
		<div className='grid grid-cols-1'>
			<input
				value={props.value}
        onChange={
          (event) => props.setSearchValue(event.target.value)
          
        }
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchInput;