/** @format */

import SpotifyIcon from '@mui/icons-material/Contactless';
import ListItemButton from '@mui/material/ListItemButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SoundCloudIcon from '@mui/icons-material/Cloud';
import EmailIcon from '@mui/icons-material/Email';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';

const socialMediaIcons = [
	{
		icon: <InstagramIcon />,
		href: 'https://www.instagram.com/danieldeedj/',
	},
	{
		icon: <SpotifyIcon />,
		href:
			'https://open.spotify.com/artist/73rTSTOwixQnWG9UkOj6QE?si=3fMqaniTR3WP69Oe30qgVA',
	},
	{
		icon: <SoundCloudIcon />,
		href: 'https://soundcloud.com/info48',
	},
	{
		icon: <FacebookIcon />,
		href: 'https://www.facebook.com/daniel.dee.39',
	},
	{
		icon: <EmailIcon />,
		href: 'mailto:info@danield.net',
	},
];

const SimpleDialog = ({ onClose, open }) => {
	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			sx={{ display: 'flex', bottom: 'none', left: 'auto' }}
		>
			<List>
				{socialMediaIcons.map((socialMedia, index) => (
					<ListItemButton
						key={index}
						component='a'
						href={socialMedia.href}
						target='_blank'
						rel='noopener noreferrer'
						sx={{
							color: 'black',
							transition: 'color 0.2s',
							'&:hover': {
								color: '#C41C1C',
							},
						}}
					>
						{socialMedia.icon}
					</ListItemButton>
				))}
			</List>
		</Dialog>
	);
};

export default SimpleDialog;
