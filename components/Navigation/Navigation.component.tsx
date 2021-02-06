import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from './Navigation.styles';

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.container}
    >
      <BottomNavigationAction label="Education" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Experience" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Expertise" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Contact" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
