import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignSelf: 'center',
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
