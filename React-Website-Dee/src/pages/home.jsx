/** @format */

import '../style/common.scss';

import Channels from '../components/channels/channels';
import PhotosSwiper from '../components/swiper/swiper';
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
			<PhotosSwiper />
		</>
	);
};

export default Home;
