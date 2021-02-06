import { Divider, IconButton, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from '@components/Welcome/Welcome.styles';
import moment from 'moment';
import { XingIcon } from '@components/customIcons';

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
        <Typography variant="h5" component="h1" gutterBottom className={classes.boldText}>
          Felix Schliemann
        </Typography>
        <Typography variant="body2" paragraph className={classes.boldText}>
          Senior Frontend Developer from Berlin
        </Typography>
        <Typography variant="body2" paragraph>
          {`Hey there, I am Felix. I am ${age} years old and work as a Senior Frontend Developer in Berlin.`}
        </Typography>
        <Divider />
        <div className={classes.linksContainer}>
          <Link href="https://github.com/eisbr11">
            <IconButton color="inherit" aria-label="visit my github page">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/felix-schliemann-3ab88815b/">
            <IconButton color="default" aria-label="visit my linked in page">
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://www.xing.com/profile/Felix_Schliemann">
            <IconButton color="default" aria-label="visit my linked in page">
              <XingIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
