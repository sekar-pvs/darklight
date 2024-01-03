import { useState } from "react";

const C1 = ({ items, setItems, handelCheck, handelDelete }) => {
	return (
		<main>
			{items.length ? (
				<div className='flex justify-center  text-3xl '>
					<ul className='space-y-5'>
						{items.map((item) => (
							<li key={item.id}>
								<input
									className='text-3xl font-normal size-6 bg-cyan-800 '
									type='checkbox'
									checked={item.checked}
									onChange={() => handelCheck(item.id)}
								/>
								<label className=' ml-3'>{item.item}</label>
								<button onClick={() => handelDelete(item.id)} className='ml-3'>
									D
								</button>
							</li>
						))}
					</ul>
				</div>
			) : (
				"your items is empty"
			)}
		</main>
	);
};

export default C1;
