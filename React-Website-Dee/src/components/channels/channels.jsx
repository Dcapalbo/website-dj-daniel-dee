/** @format */
import './channels.scss';

const channelItems = [
	{
		link: 'https://www.mixcloud.com/daniel-dee/',
		imageSrc: 'src/assets/cover_mixcloud.jpg',
		altText: 'Album_image',
	},
	{
		link: 'https://open.spotify.com/artist/73rTSTOwixQnWG9UkOj6QE?si=YZT1_ZDzRKCAZUI9nnQYgg',
		imageSrc: 'src/assets/Spotify_channel.jpeg',
		altText: 'Spotify_image',
	},
	{
		link: 'https://soundcloud.com/info48',
		imageSrc: 'src/assets/cover_soundcloud.jpg',
		altText: 'Soundcloud Cover',
	},
	{
		link: 'https://www.youtube.com/channel/UCmltOkvTXEp6SaDOVnkvbUg/featured',
		imageSrc: 'src/assets/cover_youtube.jpg',
		altText: 'Youtube_image',
	},
];

const ChannelItem = ({ link, imageSrc, altText }) => (
	<div className='mix_item'>
		<div className='mix_item_info'></div>
		<div className='overlay_mix'>
			<a
				href={link}
				target='_blank'>
				<img
					src={imageSrc}
					alt={altText}
				/>
			</a>
		</div>
	</div>
);

const Channels = () => {
	return (
		<section className='first_main_section'>
			<h1 id='landing_channel'>Channel</h1>
			<div className='main_wrapper'>
				{channelItems.map((item, index) => (
					<ChannelItem
						key={index}
						{...item}
					/>
				))}
			</div>
		</section>
	);
};

export default Channels;
