import React from 'react';
import Autosuggest from 'react-autosuggest';


const SearchInput = (props) => {
    
	return (
		<div>
			<input
        class="h-8 w-60 mt-5 text-center"
				value={props.value}
        onChange={
          (event) => props.setSearchValue(event.target.value)
          
        }
				placeholder='Cherchez votre film ici !'
			></input>
		</div>
	);
};

export default SearchInput;