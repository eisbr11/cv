import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    top: 'auto',
    bottom: 0,
  },
  homeButton: {
    marginRight: theme.spacing(4),
  },
  link: {
    padding: theme.spacing(2),
    display: 'inline-block',

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 2),
    },
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
      display: 'none',
      position: 'absolute',
      flexDirection: 'column',
      bottom: 0,
      top: 'auto',
      background: theme.palette.primary.main,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      padding: theme.spacing(0, 0, 12),
    },
  },
  navListOpen: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
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
