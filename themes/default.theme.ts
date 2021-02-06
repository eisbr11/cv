import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { blue, red, teal } from '@material-ui/core/colors';
import commonThemeSettings from './commonThemeSettings';

// Create a theme instance.
const theme:Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: teal.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFF',
    },
  },
  ...commonThemeSettings,
});

export default theme;
