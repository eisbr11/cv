import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
