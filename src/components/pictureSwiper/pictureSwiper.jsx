/** @format */

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import pictureD1 from '../../assets/picture_dd_1.jpg';
import pictureD2 from '../../assets/picture_dd_2.jpg';
import pictureD3 from '../../assets/picture_dd_3.jpg';
import pictureD4 from '../../assets/picture_dd_4.jpg';
import pictureD5 from '../../assets/picture_dd_5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Backdrop from '@mui/material/Backdrop';
import { useEffect } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './pictureSwiper.scss';
import 'swiper/css';

const PicturesSwiper = ({ onClose, open }) => {
	const handleClose = () => {
		document.body.classList.remove('no-scroll');
		onClose();
	};

	useEffect(() => {
		if (open) {
			document.body.classList.add('no-scroll');
		}
	}, [open]);

	return (
		<Backdrop
			sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
			onClick={handleClose}>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				<SwiperSlide>
					<img
						className='swiper_single_image'
						src={pictureD1}
						alt='picture_dd_1'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='swiper_single_image'
						src={pictureD2}
						alt='picture_dd_2'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='swiper_single_image'
						src={pictureD3}
						alt='picture_dd_3'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='swiper_single_image'
						src={pictureD4}
						alt='picture_dd_6'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='swiper_single_image'
						src={pictureD5}
						alt='picture_dd_5'
					/>
				</SwiperSlide>
			</Swiper>
		</Backdrop>
	);
};

export default PicturesSwiper;
