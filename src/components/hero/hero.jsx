/** @format */

import heroImage from '../../assets/daniel_dee_hero.jpg';
import logoImage from '../../assets/provadaniel_sito.png';
import './hero.scss';

export const Hero = () => {
	return (
		<div
			id='hero_section'
			className='hero'>
			<img
				className='hero_img'
				src={heroImage}
				alt='Cover Dj'
			/>
			<img
				className='logo'
				src={logoImage}
				alt='logo daniel dee'
			/>
		</div>
	);
};

export default Hero;
