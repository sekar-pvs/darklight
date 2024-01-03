import React, { useState } from "react";
import Card from "./Card";

const FoodCard = () => {
	const [card, setCard] = useState([
		{
			id: 1,
			name: "dark",
			img: "1",
			content: "it is dark world",
		},
		{
			id: 2,
			name: "light",
			img: "2",
			content: "it is light world",
		},
		{
			id: 3,
			name: "dark",
			img: "1",
			content: "it is dark world",
		},
		{
			id: 4,
			name: "light",
			img: "2",
			content: "it is light world",
		},
		{
			id: 5,
			name: "dark",
			img: "1",
			content: "it is dark world",
		},
		{
			id: 6,
			name: "light",
			img: "2",
			content: "it is light world",
		},
		{
			id: 7,
			name: "dark",
			img: "1",
			content: "it is dark world",
		},
		{
			id: 8,
			name: "light",
			img: "2",
			content: "it is light world",
		},
	]);
	return (
		<section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 '>
			{card.map((item) => {
				return <Card key={item.id} item={item} />;
			})}
		</section>
	);
};

export default FoodCard;
