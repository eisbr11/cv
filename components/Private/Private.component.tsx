import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';

import useStyles from './Private.styles';

const Private = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            Private Stuff about me
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageWrapper}>
            <Image
              src="/images/band.jpg"
              alt="Picture With Band"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </Grid>
        <Grid className={classes.centerGridItem} item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            {/* eslint-disable-next-line max-len */}
            I am a founding member of the Berlin-based Punk-Rock Band ‘Cruor Hilla’, where I do vocals and play guitar. We have played nearly 200 shows and released 3 albums in the past.
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* eslint-disable-next-line max-len */}
            When I am not on stage myself, I love to go to concerts, listen to live music, and have a good time.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction={useMediaQuery(theme.breakpoints.up('sm')) ? 'row-reverse' : 'row'} spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageWrapper}>
            <Image
              src="/images/hockey.jpg"
              alt="Me at the hockey rink"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.centerGridItem}>
          <Typography variant="body1" gutterBottom>
            {/* eslint-disable-next-line max-len */}
            Playing and watching hockey has been a big passion of mine since I was 11 years old.
          </Typography>
          <Typography variant="body1" gutterBottom>
            {/* eslint-disable-next-line max-len */}
            Currently, I play in the Landesliga Berlin for the ‘Berliner Schlittschuhclub’.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageWrapper}>
            <Image
              src="/images/lotte.jpg"
              alt="This is Lotte, my dog"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.centerGridItem}>
          <Typography variant="body1" gutterBottom>
            Also, I have a dog. Her name is Lotte. Isn’t she sweet?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Private;
