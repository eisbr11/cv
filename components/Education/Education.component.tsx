import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from './Education.styles';
import EducationTimeline from './component/EducationTimeline.component';

const EducationComponent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            My educational background
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <EducationTimeline />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EducationComponent;
