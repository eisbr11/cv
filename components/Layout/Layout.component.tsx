import React from 'react';

import Head from '@components/Head/Head.component';
import Navigation from '@components/Navigation/Navigation.component';
import useStyles from './Layout.styles';

const Layout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Head />
      <main className={classes.content}>
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;
