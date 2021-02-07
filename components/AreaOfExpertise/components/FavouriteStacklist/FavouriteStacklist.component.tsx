import React from 'react';

import {
  EsLintIcon,
  JestIcon,
  JssIcon,
  NextjsIcon,
  ReactIcon,
  TypescriptIcon,
} from '@components/customIcons';
import ListStack from '../ListStack/ListStack.component';

const favouriteStack = [
  {
    name: 'React',
    icon: <ReactIcon />,
  },
  {
    name: 'React-Native',
    icon: <ReactIcon />,
  },
  {
    name: 'TypeScript',
    icon: <TypescriptIcon />,
  },
  {
    name: 'JSS',
    icon: <JssIcon />,
  },
  {
    name: 'Next.js',
    icon: <NextjsIcon />,
  },
  {
    name: 'ESLint',
    icon: <EsLintIcon />,
  },
  {
    name: 'Jest + Enzyme',
    icon: <JestIcon />,
  },
];

const FavouriteStacklist = () => (
  <ListStack itemStack={favouriteStack} />
);

export default FavouriteStacklist;
