import React from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from './ContactInfo.styles';
import ContactCard from './components/ContactCard/ContactCard.component';

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
    </Container>
  );
};

export default ContactInfo;
