/** @format */

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

const biographyContent = [
	{
		title: 'Music',
		content: 'Progressive/Techno/Electronic Music',
	},
	{
		title: 'Nationality',
		content: 'Italian',
	},
	{
		title: 'Biography',
		content: `
      Daniel Dee was born in 1982 in Rome, Italy. He started his career as a
      DJ at the age of 15 working at a famous club in Rome: NRG (of Ciampino).
      At that time, the Roman best club scene was dominated by
      the trance-progressive club genre which influenced him greatly. After
      his first year of performing, he was chosen as the resident DJ of the
      NRG club becoming one of the most important figures of the best Sunday
      evening in Italy. In 1998, he was played regularly on "future zone" on
      Mondo Radio which was considered at the time the best progressive
      house radio show of the center region of Italy. It was on air every
      Sunday morning from 12 am to 01 pm. As time went by widening his
      musical knowledge, he played techno/progressive and started to work in
      music studios creating new original tracks which at the moment have
      been released on various records. Among these is the historical Bonzai
      Records. At the same time, he continued to gain experience in studios
      and playing in clubs, working with other top DJs of Italy. Most
      recently, Daniel Dee has put together original and innovative
      projects like: "The Club" and "Khoema", which are currently being
      proposed to the Roman club scene.
    `,
	},
];

const BioDialog = ({ onClose, open }) => {
	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			sx={{
				overflowY: 'auto',
				bottom: 'none',
				top: 'auto',
				'@media (max-width: 767px)': {
					overflowY: 'auto',
					top: 0,
					m: 0,
					p: 0,
				},
			}}>
			<List
				sx={{
					display: 'flex',
					flexDirection: 'column',
					p: 3,
					textAlign: 'center',
				}}>
				{biographyContent.map((item, index) => (
					<div key={index}>
						<Typography
							variant='h6'
							sx={{
								mb: 1,
								fontWeight: 'bold',
								'@media (max-width: 767px)': {
									fontSize: '14px',
									mb: 0,
								},
							}}>
							{item.title}
						</Typography>
						<Typography
							variant='body1'
							sx={{
								mt: 1,
								'@media (max-width: 767px)': {
									fontSize: '12px',
									mt: 0,
								},
							}}>
							{item.content}
						</Typography>
					</div>
				))}

				{/* Paragrafo e Bottone di Download */}
				<div sx={{ mt: 2 }}>
					<Typography
						variant='body1'
						sx={{
							mt: 1,
							fontWeight: 'bold',
						}}>
						Scarica il press kit
					</Typography>
					<Button
						variant='contained'
						color='primary'
						size='small'
						sx={{
							mt: 1,
							'&:hover': {
								backgroundColor: '#C41C1C',
								transform: 'scale(1.05)',
								transition: 'background-color 0.3s, transform 0.3s',
							},
						}}
						href='src/assets/cover_mixcloud.jpg'
						download>
						Download
					</Button>
				</div>
			</List>
		</Dialog>
	);
};

export default BioDialog;
