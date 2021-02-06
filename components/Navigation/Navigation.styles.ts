import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    top: 'auto',
    bottom: 0,
  },
  homeButton: {
    marginRight: theme.spacing(4),
    zIndex: 5,
  },
  link: {
    padding: theme.spacing(2),
    display: 'inline-block',

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 2),
    },

    '& $linkName::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 2,
      bottom: -3,
      borderRadius: 4,
      left: 0,
      backgroundColor: theme.palette.secondary.main,
      transition: 'all 400ms ease',
      transform: 'scaleX(0)',
    },

    '&:hover $linkName::before': {
      transform: 'scaleX(0.8)',
      transition: 'all 400ms cubic-bezier(0.38, 0.35, 0.21, 1.52)',
    },
  },
  linkName: {
    position: 'relative',
  },
  navlist: {
    listStyle: 'none',
    textAlign: 'center',
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',

    [theme.breakpoints.down('sm')]: {
      top: '100%',
      position: 'fixed',
      flexDirection: 'column',
      bottom: 0,
      background: theme.palette.primary.main,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      padding: theme.spacing(0, 0, 12),
      transition: 'top 300ms ease',
    },
  },
  navListOpen: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      top: 0,
    },
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  container: {
    width: '100%',
  },
}));

export default useStyles;
