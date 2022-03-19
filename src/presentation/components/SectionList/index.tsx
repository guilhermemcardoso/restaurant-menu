import React from 'react';
import {Section} from '../../../domain/models/section';
import {List, ListContainer} from './styles';
import SectionItem from '../SectionItem';
import {ListRenderItem} from 'react-native';

interface SectionListProps {
  data: Section[];
  onSelectItem: (section: Section) => void;
  selectedSection: Section | undefined;
}

const SectionList = ({data, onSelectItem, selectedSection}: SectionListProps) => {

  const renderItem: ListRenderItem<Section> = ({item, index}) => (
    <SectionItem selected={!!selectedSection && selectedSection?.name === data[index]?.name} onPress={onSelectItem} item={item} />
  );
  return (
    <ListContainer>
      <List<any>
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: Section) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ListContainer>
  );
};

export default SectionList;
