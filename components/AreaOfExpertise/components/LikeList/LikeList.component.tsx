import React from 'react';

import {
  CypressIcon,
  GatsbyIcon,
  NuxtIcon,
  SassIcon,
  StyledComponentsIcon,
  VueJsIcon,
} from '@components/customIcons';
import ListStack from '../ListStack/ListStack.component';

const likeStack = [
  {
    name: 'Vue.js',
    icon: <VueJsIcon />,
  },
  {
    name: 'Nuxt.js',
    icon: <NuxtIcon />,
  },
  {
    name: 'Styled Components',
    icon: <StyledComponentsIcon />,
  },
  {
    name: 'SASS',
    icon: <SassIcon />,
  },
  {
    name: 'Gatsby.js',
    icon: <GatsbyIcon />,
  },
  {
    name: 'Cypress.io',
    icon: <CypressIcon />,
  },
];

const LikeList = () => (
  <ListStack itemStack={likeStack} />
);

export default LikeList;
