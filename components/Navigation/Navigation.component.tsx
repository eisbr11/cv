import React from 'react';
import Link from 'next/link';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import useStyles from './Navigation.styles';

const navigation = [
  {
    name: 'Education',
    link: 'education',
  },
  {
    name: 'Professional Experience',
    link: 'experience',
  },
  {
    name: 'Area of Expertise',
    link: 'expertise',
  },
  {
    name: 'Private Stuff',
    link: 'private-stuff',
  },
  {
    name: 'Contact',
    link: 'contact',
  },
];

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar>
        <Link href="/">
          <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
        </Link>

        <ul className={classes.navlist}>
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <Link href={navItem.link}>
                <a className={classes.link}>
                  {navItem.name}
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
