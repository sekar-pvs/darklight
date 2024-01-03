import React, { useState } from "react";
import H1 from "./compound/H1";
import C1 from "./compound/C1";
import Food1 from "./compound/Food1";
import Hr from "./compound/Hr";
import AddItem from "./compound/AddItem";
import Food1sec from "./compound/Food1sec";
import FoodFooter from "./compound/FoodFooter";
import FoodCard from "./compound/FoodCard";
import SearchItem from "./compound/SearchItem";

const App = () => {
	/* const [items, setItem] = useState(
		JSON.parse(localStorage.getItem("todo_List")) || []
	);
	const [newItem, setNewItem] = useState("");

	const [searchItem, setSearchItem] = useState("");

	const addNewItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const addItem = { id, checked: false, item };
		const listItem = [...items, addItem];
		setItem(listItem);
		localStorage.setItem("todo_List", JSON.stringify(listItem));
	};

	const handelCheck = (id) => {
		const listItem = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItem(listItem);
		localStorage.setItem("todo_List", JSON.stringify(listItem));
	};
	const handelDelete = (id) => {
		const listItem = items.filter((item) => item.id !== id);
		setItem(listItem);
		localStorage.setItem("todo_List", JSON.stringify(listItem));
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		console.log(newItem);
		if (!newItem) return;
		addNewItem(newItem); //add item
		setNewItem("");
	}; */

	return (
		/* <div className=''>
			<H1 title='to do list' />
			<div className='space-y-5'>
				<AddItem
					newItem={newItem}
					setNewItem={setNewItem}
					handelSubmit={(e) => handelSubmit(e)}
				/>
				<SearchItem SearchItem={searchItem} setSearchItem={setSearchItem} />

				<C1
					items={items.filter((item) =>
						item.item.toLowerCase().includes(searchItem.toLowerCase())
					)}
					setItem={setItem}
					handelCheck={handelCheck}
					handelDelete={handelDelete}
				/>
			</div>
			<div>
				<FoodFooter className=' static bottom-0' />
			</div>
		</div> */

		<div>
			<Food1 />
			<Hr />
			<Food1sec />
			<FoodCard />
			<FoodFooter />
		</div>
	);
};

export default App;
