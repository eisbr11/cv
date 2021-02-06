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
  },
  navlist: {
    listStyle: 'none',
    textAlign: 'center',
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
  },
}));

export default useStyles;
