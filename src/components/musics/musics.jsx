/** @format */

import './musics.scss';

const musicItems = [4743163, 4694102, 4578126, 4522908, 4423253, 4336789, 4263979, 18059075, 17906123, 17780405];
const releasedTracks = [4743163, 4694102, 4578126, 4522908, 4423253, 4336789, 4263979];

const MusicItem = ({ trackId }) => (
	<div className='music_item'>
		<iframe
			src={`https://embed.beatport.com/?id=${trackId}&type=${releasedTracks.includes(trackId) ? 'release' : 'track'}`}
			width='400'
			title={trackId}
			height='162'
			frameBorder='0'
			scrolling='no'
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
