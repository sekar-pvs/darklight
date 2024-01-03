import React from "react";

const Card = ({ item }) => {
	return (
		<div className='shadow-2xl transform hover:scale-105 duration-100 rounded-2xl p-4'>
			<img
				className='w-full object-cover '
				src={require(`../../public/image/${item.img}.jpg`)}
				alt={`${item.name}`}
			/>
			<div className='grid'>
				<span className=' text-center uppercase font-serif'>{`${item.name}`}</span>
				<span className='font-mono'>{`${item.content}`}</span>
			</div>
		</div>
	);
};

export default Card;
