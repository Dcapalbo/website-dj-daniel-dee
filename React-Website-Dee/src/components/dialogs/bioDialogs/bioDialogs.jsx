/** @format */

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';

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
				bottom: 'none',
				top: 'auto',
			}}
		>
			<List
				sx={{
					display: 'flex',
					flexDirection: 'column',
					p: 3,
					textAlign: 'center',
				}}
			>
				{biographyContent.map((item, index) => (
					<div key={index} sx={{ mb: 2 }}>
						<Typography variant='h6'>{item.title}</Typography>
						<Typography variant='body1'>{item.content}</Typography>
					</div>
				))}
			</List>
		</Dialog>
	);
};

export default BioDialog;
