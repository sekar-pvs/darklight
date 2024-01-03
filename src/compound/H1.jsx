import React from "react";

const H1 = ({ title }) => {
	return (
		<header className='uppercase font-serif bg-cyan-900 h-16 text-center p-2 text-4xl text-white'>
			{title}
		</header>
	);
};
H1.defaultProps = {
	title: "SEKAR",
};

export default H1;
