import React from 'react';
import { Section } from '../../../domain/models/section';
import {SectionItemContainer, SectionItemText} from './styles';

interface SectionItemProps {
  item: Section;
  onPress: (section: Section) => void;
  selected: boolean;
}

const SectionItem = ({item, onPress, selected}: SectionItemProps) => {

  const handlePress = () => {
    onPress(item)
  }

  return (
    <SectionItemContainer onPress={handlePress} selected={selected}>
      <SectionItemText selected={selected}>{item.name || ''}</SectionItemText>
    </SectionItemContainer>
  );
};

export default SectionItem;
