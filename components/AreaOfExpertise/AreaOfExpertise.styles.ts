import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignSelf: 'center',
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  headline: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
