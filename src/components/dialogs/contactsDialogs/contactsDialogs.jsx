/** @format */

import ListItemButton from '@mui/material/ListItemButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import ParkIcon from '@mui/icons-material/Park'
import Dialog from '@mui/material/Dialog'
import List from '@mui/material/List'

const socialMediaIcons = [
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/danieldeedj/',
  },
  {
    icon: <ParkIcon />,
    href: 'https://linktr.ee/danieldeedj',
  },
  {
    icon: <EmailIcon />,
    href: 'mailto:info@danield.net',
  },
]

const SimpleDialog = ({ onClose, open }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{ display: 'flex', bottom: 'none', left: 'auto' }}
    >
      <List sx={{ backgroundColor: '#b0afb0' }}>
        {socialMediaIcons.map((socialMedia, index) => (
          <ListItemButton
            key={index}
            component='a'
            href={socialMedia.href}
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              color: '#000',
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
  )
}

export default SimpleDialog
