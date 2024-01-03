import React from "react";

const AddItem = ({ newItem, setNewItem, handelSubmit }) => {
	return (
		<form onSubmit={handelSubmit}>
			<label className='block text-right mr-10 font-serif text-3xl invisible '>
				Add Item
			</label>
			<div className='flex justify-center text-3xl space-y-6 transform hover:scale-105 duration-100'>
				<input
					className='flex border border-black rounded  '
					type='text'
					autoFocus
					id='addItem'
					placeholder='Add Item'
					required
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default AddItem;
