/** @format */

import '../style/common.scss';

import PicturesSwiper from '../components/pictureSwiper/PictureSwiper';
import Channels from '../components/channels/channels';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Musics from '../components/musics/musics';
import Hero from '../components/hero/hero';

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Channels />
			<Musics />
			<Footer />
		</>
	);
};

export default Home;
