import React from "react";

function Pp() {
	return (
		<main className='space-y-2'>
			<div className='space-y-1 flex space-x-1  hover:flex-row-reverse '>
				<div className='h-40 w-40 bg-black text-white  hover:rounded-full ml-1 mt-1 p-16'>
					P
				</div>
				<div className='h-40 w-40 bg-red-400 text-white  p-16 '>V</div>
				<div className='h-40 w-40 bg-lime-400 text-white p-16 '>S</div>
			</div>
			<div className='w-40 min-w-40 md:min-w-0 bg-lime-400 text-white  space-y-5'>
				hi
			</div>
		</main>
	);
}

export default Pp;
