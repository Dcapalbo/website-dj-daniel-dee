/** @format */
import DanielDeeHero from '../../assets/provadaniel_sito.png';
import Nav from '../nav/nav';
import './header.scss';

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
			<section className='header_top'>
				<div className='header_wrapper'>
					<a href='#hero_section'>
						<img
							className='header_top_logo'
							src={DanielDeeHero}
							alt='logo daniel dee'
						/>
					</a>
					<Nav links={navLinks} />
				</div>
			</section>
		</header>
	);
};

export default Header;
