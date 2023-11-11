/** @format */
import SimpleDialog from '../dialogs/contactsDialogs/contactsDialogs';
import BioDialog from '../dialogs/bioDialogs/bioDialogs';
import { useState } from 'react';

const Nav = ({ links }) => {
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
			<ul className='dropdown_list_item'>
				{links.map((link, index) => (
					<a
						key={index}
						className={`list_item ${link.className}`}
						href={link.href}
						onClick={() => {
							if (link.text === 'Contacts' || link.text === 'Bio') {
								handleOpenDialog(link.text);
							}
						}}
					>
						{link.text}
					</a>
				))}
			</ul>
			{dialogType === 'Contacts' && (
				<SimpleDialog open={openDialog} onClose={handleCloseDialog} />
			)}
			{dialogType === 'Bio' && (
				<BioDialog open={openDialog} onClose={handleCloseDialog} />
			)}
		</>
	);
};

export default Nav;
