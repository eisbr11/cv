import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CodeIcon from '@material-ui/icons/Code';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import BusinessIcon from '@material-ui/icons/Business';
import ComputerIcon from '@material-ui/icons/Computer';
import Timeline from '@material-ui/lab/Timeline';

import { ReactIcon } from '@components/customIcons';
import useStyles from './ExperienceTimeline.styles';

const ExperienceTimelineComponent = () => {
  const classes = useStyles();
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Dec. 2018 - today
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary">
            <ReactIcon color="secondary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.bold}>
              diva-e Platforms GmbH
            </Typography>
            <Typography variant="caption" className={classes.bold}>
              Senior Frontend Developer
            </Typography>
            <Typography variant="body2">
              {/* eslint-disable-next-line max-len */}
              At diva-e, I was developing a mobile app with React Native and had my first experiences with Flutter. I also enjoyed working on CMS projects with either nuxt.js/vue or React/Gatsby/Next.js.
            </Typography>
            <Typography variant="body2">
              I was also working on some e-Commerce projects with the Spryker Suite.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jan. 2018 - Nov. 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="grey">
            <CodeIcon color="secondary" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.bold}>
              NETFORMIC GmbH
            </Typography>
            <Typography variant="caption" className={classes.bold}>
              Senior Frontend Developer
            </Typography>
            <Typography variant="body2">
              {/* eslint-disable-next-line max-len */}
              As I was promoted to Senior level, I also was given the role of a Lead Developer on a project, having technical responsibility over the whole project.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug. 2013 - Dec. 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="inherit">
            <BusinessIcon color="inherit" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.bold}>
              NETFORMIC GmbH
            </Typography>
            <Typography variant="caption" className={classes.bold}>Software Developer (Frontend)</Typography>
            <Typography variant="body2">
              {/* eslint-disable-next-line max-len */}
              At NETFORMIC, I worked on a variety of different e-Commerce projects that used lots of different systems like Symfony, Shopware, Oxid, Spryker.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug. 2010 - June 2013
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <ComputerIcon color="inherit" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" className={classes.bold}>
              silver.solutions GmbH
            </Typography>
            <Typography variant="caption" className={classes.bold}>
              Trainee Software Development
            </Typography>
            <Typography variant="body2">
              {/* eslint-disable-next-line max-len */}
              In my time at silver.solutions, I started as a php developer but later found that my real passion lies in the frontend development. I worked on several e-commerce projects.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default ExperienceTimelineComponent;
