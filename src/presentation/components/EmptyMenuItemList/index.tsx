import React from 'react';
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
