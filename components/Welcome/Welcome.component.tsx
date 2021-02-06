import { Typography } from '@material-ui/core';
import Image from 'next/image';

import useStyles from '@components/Welcome/Welcome.styles';
import moment from 'moment';

const age = moment().diff('1989-02-12', 'years');

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Image
          src="/images/portrait.jpg"
          alt="Portrait Image Felix Schliemann"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <Typography variant="h5" component="h1" gutterBottom className={classes.boldText}>
            Felix Schliemann
          </Typography>
          <Typography variant="body2" paragraph className={classes.boldText}>
            Senior Frontend Developer from Berlin
          </Typography>
          <Typography variant="body2">
            {`Hey there, I am Felix. I am ${age} years old and work as a Senior Frontend Developer in Berlin.`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
