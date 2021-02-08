import React from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link';

import ContactCard from './components/ContactCard/ContactCard.component';
import useStyles from './ContactInfo.styles';

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            My contact Info
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={7} lg={6}>
          <ContactCard />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={9} md={7} lg={6} className={classes.githubBlock}>
          <Typography variant="body2" gutterBottom>
            This cv was made in a weekend.
            The code can be found here:
          </Typography>
          <Link href="https://github.com/eisbr11/cv">
            <Button startIcon={<GitHubIcon />} variant="contained" size="large" color="secondary" aria-label="look at this project in Github">
              github.com/eisbr11/cv
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactInfo;
