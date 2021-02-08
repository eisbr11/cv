import React from 'react';
import ShopIcon from '@material-ui/icons/Shop';
import GitHubIcon from '@material-ui/icons/GitHub';

import {
  StoryblokIcon,
  GitlabIcon,
  SymfonyIcon,
} from '@components/customIcons';
import ListStack from '../ListStack/ListStack.component';

const systemsStack = [
  {
    name: 'Gitlab + CI/CD',
    icon: <GitlabIcon />,
  },
  {
    name: 'Github Actions',
    icon: <GitHubIcon />,
  },
  {
    name: 'Symfony',
    icon: <SymfonyIcon />,
  },
  {
    name: 'Several CMS Systems like Storyblok, Squidex, Wordpress, Typo3',
    icon: <StoryblokIcon />,
  },
  {
    name: 'Several E-Commerce Systems like Spryker, Shopware, Oxid, SAP Commerce',
    icon: <ShopIcon />,
  },
];

const SystemsList = () => (
  <ListStack itemStack={systemsStack} />
);

export default SystemsList;
