import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    alignSelf: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  imageWrapper: {
    minHeight: 500,
    border: `4px solid ${theme.palette.primary.light}`,
    borderRadius: 4,
    position: 'relative',
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      minHeight: 700,
    },
  },
  centerGridItem: {
    alignSelf: 'center',
  },
}));

export default useStyles;
