import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';

export default function SideBar({ navItems }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const router = useRouter();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navItems.map((text, index) => (
          <ListItem
            onClick={() => router.push(`/${text?.url}`)}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{text?.icons}</ListItemIcon>
              <ListItemText className='text-[2rem]' primary={text?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <div
          className='cursor-pointer menuIcon'
          onClick={toggleDrawer('right', true)}
        >
          <MenuIcon className='sm:text-[3rem] text-[1.5rem] text-[#2463EB]' />
        </div>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
