import React from 'react';
import {DividerContainer} from './styles';

interface DividerProps {
  color?: string;
}

const Divider = ({color}: DividerProps) => {
  return (
    <DividerContainer color={color} />
  );
};

export default Divider;
