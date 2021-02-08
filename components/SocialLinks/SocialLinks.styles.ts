import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  linksContainer: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(1, 2),
    justifyContent: 'space-evenly',
  },
}));

export default useStyles;
