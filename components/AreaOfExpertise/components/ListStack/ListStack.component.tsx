import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import useStyles from './ListStack.styles';

const ListStack = ({
  itemStack,
}: {
  itemStack
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <List>
        {itemStack.map((item) => (
          <ListItem key={item.name}>
            <ListItemIcon>
              { item.icon }
            </ListItemIcon>
            <ListItemText
              primary={item.name}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListStack;
