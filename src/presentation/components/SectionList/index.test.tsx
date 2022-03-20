import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SectionList from './index';
import {Section} from '../../../domain/models/section';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MenuItemList', () => {
  test('MenuItemList being displayed with all properties', async () => {
    const data: Section[] = [
      {
        description: 'Item Description',
        name: 'Item Name',
        menuitems: []
      },
      {
        description: 'Item Description 2',
        name: 'Item Name 2',
        menuitems: []
      },
    ];
    const onSelectItem = jest.fn();
    
    const component = (
      <SectionList
        data={data}
        onSelectItem={onSelectItem}
        selectedSection={undefined}
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
    const data: Section[] = [];
    const emptyListMessage = 'empty list';
    const onSelectItem = jest.fn();

    const component = (
      <SectionList
        data={data}
        onSelectItem={onSelectItem}
        selectedSection={undefined}
      />
    );

    expect(() => render(component)).not.toThrow();
  });
});
