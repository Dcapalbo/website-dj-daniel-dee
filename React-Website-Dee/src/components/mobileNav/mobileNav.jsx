/** @format */

import SimpleDialog from '../dialogs/contactsDialogs/contactsDialogs';
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
			<IconButton color='danger' onClick={() => setOpen(true)}>
				<ClearAllIcon fontSize='large' />
			</IconButton>
			<Drawer open={open} color='danger' onClose={() => setOpen(false)}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 0.5,
						ml: 'auto',
						mt: 1,
						mr: 2,
					}}
				>
					<Typography
						component='label'
						htmlFor='close-icon'
						fontSize='sm'
						fontWeight='lg'
						sx={{ cursor: 'pointer' }}
					>
						Close
					</Typography>
					<ModalClose id='close-icon' sx={{ position: 'initial' }} />
				</Box>
				<List
					onClick={() => setOpen(false)}
					size='lg'
					component='nav'
					sx={{
						flex: 'none',
						fontSize: 'xl',
						'& > div': { justifyContent: 'center' },
					}}
				>
					<ListItemButton sx={{ fontWeight: 'lg' }}>
						<a href='#landing_channel'>Channel</a>
					</ListItemButton>
					<ListItemButton>
						<a href='#landing_music'>Music</a>
					</ListItemButton>
					<ListItemButton>Photo</ListItemButton>
					<ListItemButton onClick={() => handleOpenDialog('contacts')}>
						Contacts
					</ListItemButton>
					<ListItemButton onClick={() => handleOpenDialog('bio')}>
						Bio
					</ListItemButton>
				</List>
			</Drawer>
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
