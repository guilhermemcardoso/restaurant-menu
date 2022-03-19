import React from 'react';
import {MenuTitleContainer, MenuTitleText} from './styles';

interface MenuTitleProps {
  title: string | undefined;
}

const MenuTitle = ({title}: MenuTitleProps) => {
  return (
    <MenuTitleContainer>
      <MenuTitleText>{title || ''}</MenuTitleText>
    </MenuTitleContainer>
  );
};

export default MenuTitle;
