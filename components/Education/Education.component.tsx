import { Container, Grid, Typography } from '@material-ui/core';

import EducationTimeline from './component/EducationTimeline.component';

const EducationComponent = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">
          Education
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <EducationTimeline />
      </Grid>
    </Grid>
  </Container>
);

export default EducationComponent;
