import React from 'react';
import {List, ListContainer} from './styles';
import MenuItem from '../MenuItem';
import {ListRenderItem} from 'react-native';
import {Menuitem} from '../../../domain/models/menuitem';
import Divider from '../Divider';
import EmptyMenuItemList from '../EmptyMenuItemList';

interface MenuItemListProps {
  data: Menuitem[];
  onSelectItem: (menuitem: Menuitem) => void;
}

const MenuItemList = ({data, onSelectItem}: MenuItemListProps) => {
  const renderItem: ListRenderItem<Menuitem> = ({item, index}) => (
    <MenuItem onPress={onSelectItem} item={item} />
  );
  return (
    <ListContainer>
      {data.length > 0 ? (
        <List<any>
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: Menuitem, index: number) =>
            `${index}-${item.name}-${item.description}-${item.price}`
          }
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyMenuItemList message='Select a section to see its items' />
      )}
    </ListContainer>
  );
};

export default MenuItemList;
