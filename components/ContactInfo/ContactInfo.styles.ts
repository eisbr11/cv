import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  githubBlock: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
