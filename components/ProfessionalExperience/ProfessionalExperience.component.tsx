import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from '@components/ProfessionalExperience/ProfessionalExperience.styles';
import ExperienceTimelineComponent from './component/ExperienceTimeline.component';

const ProfessionalExperience = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            My professional Experience
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ExperienceTimelineComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfessionalExperience;
