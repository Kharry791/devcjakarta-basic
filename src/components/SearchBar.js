import React from 'react';

const style = {
	inputSearch: {
		height: 20,
		width: 500,
		padding: 20
	},
	contentSearch: {
		marginTop: 30,
		marginBottom: 50,
		height: 50,
		backgroundColor: '#b71c1c',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
	}
};

const SearchBar = props => {
	return (
		<div style={style.contentSearch}>
			<input
				style={style.inputSearch}
				type="text"
				placeholder="Search anything ..."
				onChange={props.onChangeSearch}
			/>
		</div>
	)
};

export default SearchBar;
