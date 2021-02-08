import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import CompareIcon from '@material-ui/icons/Compare';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import ListStack from '../ListStack/ListStack.component';

const softSkillStack = [
  {
    name: 'Taking Responsibility for my work',
    icon: <AssignmentTurnedInIcon />,
  },
  {
    name: 'Creative Problem Solving',
    icon: <CompareIcon />,
  },
  {
    name: 'Good Communication Skills',
    icon: <FavoriteBorderIcon />,
  },
  {
    name: 'Always willing to learn new things',
    icon: <WbIncandescentOutlinedIcon />,
  },
  {
    name: 'Always trying to be the best human being I can be',
    icon: <SentimentSatisfiedOutlinedIcon />,
  },
];

const SoftSkillList = () => (
  <ListStack itemStack={softSkillStack} />
);

export default SoftSkillList;
