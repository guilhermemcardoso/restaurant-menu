import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MenuItemList from './index';
import {Menuitem} from '../../../domain/models/menuitem';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MenuItemList', () => {
  test('MenuItemList being displayed with all properties', async () => {
    const data: Menuitem[] = [
      {
        description: 'Item Description',
        name: 'Item Name',
        price: 10,
      },
      {
        description: 'Item Description 2',
        name: 'Item Name 2',
        price: 20.5,
      },
    ];
    const onSelectItem = jest.fn();
    
    const component = (
      <MenuItemList
        data={data}
        onSelectItem={onSelectItem}
      />
    );

    const {getByText} = render(component);

    const itemName1 = getByText(data[0].name);
    const itemName2 = getByText(data[1].name);

    expect(itemName1).not.toBeNull();
    expect(itemName2).not.toBeNull();

    expect(() => render(component)).not.toThrow();
  });

  test('MenuItemList being displayed with empty data', async () => {
    const data: Menuitem[] = [];
    const emptyListMessage = 'empty list';
    const onSelectItem = jest.fn();

    const component = (
      <MenuItemList
        data={data}
        onSelectItem={onSelectItem}
        emptyListMessage={emptyListMessage}
      />
    );

    const {getByText} = render(component);

    const emptyListMessageComponent = getByText(emptyListMessage);

    expect(emptyListMessageComponent).not.toBeNull();
    expect(() => render(component)).not.toThrow();
  });

  test('MenuItemList being displayed without onSelectItem function', async () => {
    const data: Menuitem[] = [
      {
        description: 'Item Description',
        name: 'Item Name',
        price: 10,
      },
      {
        description: 'Item Description 2',
        name: 'Item Name 2',
        price: 20.5,
      },
    ];

    const component = <MenuItemList data={data} />;

    const {getByText} = render(component);

    const itemName1 = getByText(data[0].name);
    fireEvent.press(itemName1);

    expect(() => render(component)).not.toThrow();
  });
});
