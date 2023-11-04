/** @format */

import Nav from '../nav/nav';
import React from 'react';
import Button from '@mui/material/Button';

const Header = () => {
	const navLinks = [
		{ text: 'Channel', href: '#landing_channel', className: 'mix' },
		{ text: 'Music', href: '#landing_music', className: 'music' },
		{ text: 'Photo', href: '#pictures_modal', className: '' },
		{ text: 'Contacts', href: '#contacts_modal', className: '' },
		{ text: 'Bio', href: '#bio_modal', className: '' },
	];

	return (
		<header>
			{/* Resto del codice */}
			<div className='right_info'>
				<i className='fas fa-bars hamburgher'>
					<Nav links={navLinks} />
					<Button variant='contained'>Hello world</Button>
				</i>
			</div>
			{/* Resto del codice */}
		</header>
	);
};

export default Header;
