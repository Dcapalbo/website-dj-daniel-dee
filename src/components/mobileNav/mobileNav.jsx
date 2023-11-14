/** @format */

import SimpleDialog from '../dialogs/contactsDialogs/contactsDialogs';
import PicturesSwiper from '../pictureSwiper/pictureSwiper';
import BioDialog from '../dialogs/bioDialogs/bioDialogs';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import ModalClose from '@mui/joy/ModalClose';
import React, { useState } from 'react';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import Box from '@mui/joy/Box';

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
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						ml: 'auto',
						gap: 0.5,
						mt: 1,
						mr: 2,
					}}>
					<Typography
						component='label'
						htmlFor='close-icon'
						fontSize='sm'
						fontWeight='lg'
						sx={{ cursor: 'pointer' }}>
						Close
					</Typography>
					<ModalClose
						id='close-icon'
						sx={{ position: 'initial' }}
					/>
				</Box>
				<List
					onClick={() => setOpen(false)}
					size='lg'
					component='nav'
					sx={{
						flex: 'none',
						fontSize: 'xl',
						'& > div': { justifyContent: 'center' },
					}}>
					<ListItemButton sx={{ fontWeight: 'lg' }}>
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
