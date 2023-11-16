/** @format */

import SimpleDialog from '../dialogs/contactsDialogs/contactsDialogs';
import PicturesSwiper from '../pictureSwiper/pictureSwiper';
import BioDialog from '../dialogs/bioDialogs/bioDialogs';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import React, { useState } from 'react';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [dialogType, setDialogType] = useState(null);

	const handleOpenDialog = (type) => {
		setOpenDialog(true);
		setDialogType(type);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
		setDialogType(null);
	};
	return (
		<>
			<IconButton
				sx={{ color: 'white' }}
				onClick={() => setOpen(true)}>
				<ClearAllIcon fontSize='large' />
			</IconButton>
			<Drawer
				open={open}
				onClose={() => setOpen(false)}>
				<List
					onClick={() => setOpen(false)}
					size='lg'
					component='nav'
					sx={{
						fontSize: 'xl',
						background: '#b0afb0',
						'& > div': { justifyContent: 'center' },
					}}>
					<ListItemButton
						sx={{ fontWeight: 'lg', '&:hover': { backgroundColor: 'blue' } }}>
						<a href='#landing_channel'>Channel</a>
					</ListItemButton>
					<ListItemButton>
						<a href='#landing_music'>Music</a>
					</ListItemButton>
					<ListItemButton onClick={() => handleOpenDialog('photo')}>
						Photo
					</ListItemButton>
					<ListItemButton onClick={() => handleOpenDialog('contacts')}>
						Contacts
					</ListItemButton>
					<ListItemButton onClick={() => handleOpenDialog('bio')}>
						Bio
					</ListItemButton>
				</List>
			</Drawer>
			<PicturesSwiper
				open={openDialog && dialogType === 'photo'}
				onClose={handleCloseDialog}
			/>
			<SimpleDialog
				open={openDialog && dialogType === 'contacts'}
				onClose={handleCloseDialog}
			/>
			<BioDialog
				open={openDialog && dialogType === 'bio'}
				onClose={handleCloseDialog}
			/>
		</>
	);
};

export default MobileNavigation;
