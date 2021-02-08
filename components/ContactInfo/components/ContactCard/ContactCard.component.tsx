import {
  Card,
  CardActions,
  CardContent,
  Divider, IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import Image from 'next/image';

import SocialLinks from '@components/SocialLinks/SocialLinks.component';
import useStyles from './ContactCard.styles';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';

const ContactCard = () => {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.imageWrapper}>
        <Image
          src="/images/portrait2.jpg"
          alt="Portrait Image Felix Schliemann"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Felix Schliemann
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
          I live in northern Berlin and I speak English (fluently) and German (mother tongue).
        </Typography>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button component="a" href="tel:+49 177 4146026">
            <ListItemIcon>
              <PhoneInTalkIcon />
            </ListItemIcon>
            <ListItemText primary="+49 177 4146026" />
          </ListItem>
          <ListItem button component="a" href="mailto:eisbr11@gmail.com">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="eisbr11@gmail.com" secondary="my personal email address" />
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <SocialLinks />
      </CardActions>
    </Card>
  );
};

export default ContactCard;
