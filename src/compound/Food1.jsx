import React, { useState } from "react";

const Food1 = () => {
	const [open, setOpen] = useState(false);
	const handelNav = () => {
		setOpen(!open);
		console.log(open);
	};
	return (
		<nav>
			<div className='flex justify-between w-auto md:min-w-6 mx-auto p-6'>
				<div className='md:flex'>
					<div className='md:hidden text-6xl text-teal-500 '>
						<button onClick={handelNav}>=</button>
					</div>
					<div className={`md:block justify-end ${open ? "block" : "hidden"} `}>
						<div className=' '>
							<ul className='uppercase space-y-4 md:space-x-3 md:space-y-0 grid md:flex '>
								<li>
									<a
										href='#'
										className=' font-serif  p-2 hover:bg-teal-500 hover:rounded-full hover:text-white '>
										{" "}
										home
									</a>
								</li>
								<li>
									<a
										href='#'
										className=' font-serif  p-2 hover:bg-teal-500 hover:rounded-full hover:text-white'>
										contact
									</a>
								</li>
								<li>
									<a
										href='Pp.jsx'
										className=' font-serif  p-2 hover:bg-teal-500 hover:rounded-full hover:text-white '>
										about
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='uppercase '>
					<span className='text-5xl md:text-6xl text-teal-500 font-serif'>
						{" "}
						dark{" "}
					</span>
					<span className='text-3xl md:text-4xl font-serif'>light</span>
				</div>
			</div>
		</nav>
	);
};

export default Food1;
