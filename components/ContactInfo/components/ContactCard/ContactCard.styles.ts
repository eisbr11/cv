import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  imageWrapper: {
    height: 400,
    position: 'relative',
    flex: 1,
  },
}));

export default useStyles;
