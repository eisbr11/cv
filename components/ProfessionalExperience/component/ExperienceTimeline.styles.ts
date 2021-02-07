import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
