/** @format */

const Nav = ({ links }) => {
	return (
		<ul className='dropdown_list_item'>
			{links.map((link, index) => (
				<a
					key={index}
					className={`list_item ${link.className}`}
					href={link.href}>
					{link.text}
				</a>
			))}
		</ul>
	);
};

export default Nav;
