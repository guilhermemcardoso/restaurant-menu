import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MenuItem from './index';
import {Menuitem} from '../../../domain/models/menuitem';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MenuItem', () => {
  test('MenuItem being displayed with all properties', async () => {
    const item: Menuitem = {
      description: 'Item Description',
      name: 'Item Name',
      price: 10,
    };
    const onPress = jest.fn();

    const component = <MenuItem item={item} onPress={onPress} />;

    const {getByText} = render(component);

    const nameComponent = getByText(item.name);
    const descriptionComponent = getByText(item.description);
    const priceComponent = getByText(`$ ${item.price.toFixed(2)}`);

    expect(nameComponent).not.toBeNull();
    expect(descriptionComponent).not.toBeNull();
    expect(priceComponent).not.toBeNull();

    fireEvent.press(nameComponent);
    expect(onPress).toHaveBeenCalled();
    fireEvent.press(descriptionComponent);
    expect(onPress).toHaveBeenCalledTimes(2);
    expect(() => render(component)).not.toThrow();
  });

  test('MenuItem being displayed without onPress function', async () => {
    const item: Menuitem = {
      description: 'Item Description',
      name: 'Item Name',
      price: 10,
    };

    const component = <MenuItem item={item} />;

    const {getByText} = render(component);

    const nameComponent = getByText(item.name);
    const descriptionComponent = getByText(item.description);

    expect(nameComponent).not.toBeNull();
    expect(descriptionComponent).not.toBeNull();

    fireEvent.press(nameComponent);
    expect(() => render(component)).not.toThrow();
  });

  test('MenuItem being displayed with empty item.name', async () => {
    const item: Menuitem = {
      description: 'Item Description',
      name: '',
      price: 10,
    };

    const component = <MenuItem item={item} />;

    const {getByText} = render(component);

    const descriptionComponent = getByText(item.description);

    expect(descriptionComponent).not.toBeNull();

    fireEvent.press(descriptionComponent);
    expect(() => render(component)).not.toThrow();
  });

  test('MenuItem being displayed with empty item.description', async () => {
    const item: Menuitem = {
      description: '',
      name: 'Item Name',
      price: 10,
    };
    const onPress = jest.fn();

    const component = <MenuItem item={item} onPress={onPress} />;

    const {getByText} = render(component);

    const nameComponent = getByText(item.name);
    const priceComponent = getByText(`$ ${item.price.toFixed(2)}`);

    expect(nameComponent).not.toBeNull();
    expect(priceComponent).not.toBeNull();

    fireEvent.press(nameComponent);
    expect(onPress).toHaveBeenCalled();
    expect(() => render(component)).not.toThrow();
  });
});
