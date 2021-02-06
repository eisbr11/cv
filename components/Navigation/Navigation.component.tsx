import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  IconButton,
  Toolbar,
  Fab,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './Navigation.styles';

const navigation = [
  {
    name: 'Education',
    link: '/education',
  },
  {
    name: 'Professional Experience',
    link: '/experience',
  },
  {
    name: 'Area of Expertise',
    link: '/expertise',
  },
  {
    name: 'Private Stuff',
    link: '/private-stuff',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const Navigation = () => {
  const classes = useStyles();
  const [navOpen, setNavOpen] = React.useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar>
        <Link href="/">
          <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
        </Link>
        <Fab onClick={handleClick} color="secondary" aria-label="add" className={classes.fabButton}>
          <MenuIcon />
        </Fab>

        <ul className={`${classes.navlist} ${navOpen ? classes.navListOpen : ''}`}>
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <Link href={navItem.link}>
                <a className={classes.link}>
                  <span className={classes.linkName}>{navItem.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
