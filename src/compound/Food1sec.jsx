import React, { useState } from "react";

const Food1sec = () => {
	const [selectbtn, setSelectbtn] = useState(0);
	const handelPotlolio = () => {
		setSelectbtn(1);
	};

	return (
		<section className='items-center font-serif mt-4 w-5/6  md:w-4/6 mx-auto text-center '>
			<div className=' space-y-5 md:space-y-0 md:flex justify-around '>
				<button
					className={`bodybtn ${
						selectbtn === 1 ? "bg-teal-500 text-white" : "text-black"
					}`}
					onClick={handelPotlolio}>
					Potfolio
				</button>
				<button
					className={`bodybtn ${
						selectbtn === 2 ? "bg-teal-500 text-white" : "text-black"
					}`}
					onClick={() => setSelectbtn(2)}>
					Resume
				</button>
				<button
					className={`bodybtn ${
						selectbtn === 3 ? "bg-teal-500 text-white" : "text-black"
					}`}
					onClick={() => setSelectbtn(3)}>
					Contact
				</button>
			</div>
		</section>
	);
};

export default Food1sec;
