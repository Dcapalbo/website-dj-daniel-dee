/** @format */

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Backdrop from '@mui/material/Backdrop';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css';

const PicturesSwiper = ({ onClose, open }) => {
	const handleClose = () => {
		onClose();
	};

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
						src='src\assets\picture_dd_1.jpg'
						alt='picture_dd_1'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='src\assets\picture_dd_2.jpg'
						alt='picture_dd_2'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='src\assets\picture_dd_3.jpg'
						alt='picture_dd_3'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='src\assets\picture_dd_6.jpg'
						alt='picture_dd_6'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='src\assets\picture_dd_4.jpg'
						alt='picture_dd_4'
					/>
				</SwiperSlide>
			</Swiper>
		</Backdrop>
	);
};

export default PicturesSwiper;
