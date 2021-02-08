import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'stretch',
    flex: 1,
    width: '100%',
    position: 'relative',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  imageWrapper: {
    minHeight: 300,
    position: 'relative',
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      flex: '0 0 320px',
    },
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
