import React from 'react';
import { Menuitem } from '../../../domain/models/menuitem';
import {MenuItemContainer, MenuItemName, MenuItemDescription, MenuItemPrice} from './styles';

interface MenuItemProps {
  item: Menuitem;
  onPress: (menuitem: Menuitem) => void;
}

const MenuItem = ({item, onPress}: MenuItemProps) => {

  const handlePress = () => {
    onPress(item)
  }

  return (
    <MenuItemContainer onPress={handlePress}>
      <MenuItemName>{item.name || ''}</MenuItemName>
      <MenuItemDescription>{item.description || ''}</MenuItemDescription>
      <MenuItemPrice>$ {item.price.toFixed(2) || ''}</MenuItemPrice>
    </MenuItemContainer>
  );
};

export default MenuItem;
