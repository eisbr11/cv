import Link from 'next/link';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { XingIcon } from '@components/customIcons';
import useStyles from './SocialLinks.styles';

const SocialLinks = () => {
  const classes = useStyles();
  return (
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
  );
};

export default SocialLinks;
