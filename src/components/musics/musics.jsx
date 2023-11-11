/** @format */

import './musics.scss';

const musicItems = [
	4263979, 18059075, 17906123, 17780405, 12822906, 12822907, 12822908, 12822909,
	12823058, 12823059,
];

const MusicItem = ({ trackId }) => (
	<div className='music_item'>
		<iframe
			src={`https://embed.beatport.com/?id=${trackId}&type=track`}
			width='400'
			height='162'
			style={{ maxWidth: '600px' }}></iframe>
	</div>
);

const Musics = () => {
	return (
		<section className='second_main_section'>
			<h1 id='landing_music'>Music</h1>
			<div className='main_wrapper'>
				{musicItems.map((trackId, index) => (
					<MusicItem
						key={index}
						trackId={trackId}
					/>
				))}
			</div>
		</section>
	);
};

export default Musics;
