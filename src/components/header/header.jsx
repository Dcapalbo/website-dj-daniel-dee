/** @format */
import DanielDeeHero from '../../assets/provadaniel_sito.png';
import MobileNavigation from '../mobileNav/mobileNav';
import React, { useState, useEffect } from 'react';
import Nav from '../nav/nav';
import './header.scss';

const Header = () => {
	const [isMobileView, setIsMobileView] = useState(window.innerWidth < 767);

	const navLinks = [
		{ text: 'Channel', href: '#landing_channel', className: 'mix' },
		{ text: 'Music', href: '#landing_music', className: 'music' },
		{ text: 'Photo', href: '#pictures_modal', className: '' },
		{ text: 'Contacts', href: '#contacts_modal', className: '' },
		{ text: 'Bio', href: '#bio_modal', className: '' },
	];

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 767);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header>
			<section className='header_top'>
				<div className='header_wrapper'>
					<a href='#hero_section'>
						<img
							className='header_top_logo'
							src={DanielDeeHero}
							alt='logo daniel dee'
						/>
					</a>
					{isMobileView ? <MobileNavigation /> : <Nav links={navLinks} />}
				</div>
			</section>
		</header>
	);
};

export default Header;
