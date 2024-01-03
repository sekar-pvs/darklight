import React from "react";

const FoodFooter = () => {
	const DMY = new Date();
	const year = DMY.getFullYear();
	return (
		<footer className=' bg-teal-500 p-5 text-white font-serif text-center text-4xl'>
			copyright &copy; {year}
		</footer>
	);
};

export default FoodFooter;
