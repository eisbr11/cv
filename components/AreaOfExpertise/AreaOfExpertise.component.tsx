import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

import FavouriteStacklist from './components/FavouriteStacklist/FavouriteStacklist.component';
import LikeList from './components/LikeList/LikeList.component';
import useStyles from './AreaOfExpertise.styles';
import SystemsList from './components/SystemsList/SystemsList.component';

const AreaOfExpertise = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            My area of expertise
          </Typography>
        </Grid>
        <Grid item md={7}>
          <Typography variant="body1" gutterBottom>
            {/* eslint-disable-next-line max-len */}
            Here you can see some of the technologies and systems, I had the opportunity to work with in the past.
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* eslint-disable-next-line max-len */}
            I am always looking for new things to learn and new technologies, that make our code more efficient, cleaner, and easier to understand.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" component="h1" className={`${classes.bold} ${classes.headline}`}>
              My favourite Tech-Stack:
            </Typography>
            <FavouriteStacklist />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" component="h1" className={`${classes.bold} ${classes.headline}`}>
              Others I like:
            </Typography>
            <LikeList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" component="h1" className={`${classes.bold} ${classes.headline}`}>
              Systems I worked with
            </Typography>
            <SystemsList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AreaOfExpertise;
