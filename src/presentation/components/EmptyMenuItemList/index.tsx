import React from 'react';
import {Menuitem} from '../../../domain/models/menuitem';
import {
  EmptyMenuItemListContainer,
  EmptyMenuItemListMessage
} from './styles';

interface EmptyMenuItemListProps {
  message: string;
}

const EmptyMenuItemList = ({message}: EmptyMenuItemListProps) => {
  
  return (
    <EmptyMenuItemListContainer>
      <EmptyMenuItemListMessage>
        {message}
      </EmptyMenuItemListMessage>
    </EmptyMenuItemListContainer>
  );
};

export default EmptyMenuItemList;
