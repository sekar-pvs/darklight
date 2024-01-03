import React from "react";

const SearchItem = ({ SearchItem, setSearchItem }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}>
			<div className='flex justify-center text-3xl transform hover:scale-105 duration-100'>
				<input
					className='flex border border-black rounded  '
					type='text'
					role='search box'
					placeholder='search item'
					value={SearchItem}
					onChange={(e) => setSearchItem(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default SearchItem;
