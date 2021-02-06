import { ThemeOptions } from '@material-ui/core';
import robotoSlab from './fonts/robotoSlab.fontface';

const commonThemeSettings:ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [robotoSlab.regular, robotoSlab.fw700],
        html: {
          WebkitFontSmoothing: 'auto',
        },
        p: {
          marginTop: 0,
          marginBottom: '1.5rem',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto Slab',
    fontSize: 20,
  },
};

export default commonThemeSettings;
