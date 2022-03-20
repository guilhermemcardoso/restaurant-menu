import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SectionItem from './index';
import {Section} from '../../../domain/models/section';
import {textPrimary} from '../../../assets/colors';
import {ReactTestRendererJSON} from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('SectionItem', () => {
  test('SectionItem being displayed with all properties', async () => {
    const item: Section = {
      description: 'Item Description',
      name: 'Item Name',
      menuitems: [],
    };
    const onPress = jest.fn();

    const component = <SectionItem item={item} onPress={onPress} />;

    const {getByText} = render(component);

    const nameComponent = getByText(item.name);

    expect(nameComponent).not.toBeNull();

    fireEvent.press(nameComponent);
    expect(onPress).toHaveBeenCalled();
    expect(() => render(component)).not.toThrow();
  });

  test('SectionItem being displayed without onPress function', async () => {
    const item: Section = {
      description: 'Item Description',
      name: 'Item Name',
      menuitems: [],
    };

    const component = <SectionItem item={item} />;

    const {getByText} = render(component);

    const nameComponent = getByText(item.name);

    expect(nameComponent).not.toBeNull();

    fireEvent.press(nameComponent);
    expect(() => render(component)).not.toThrow();
  });

  test('SectionItem being displayed correctly when selected = true', async () => {
    const item: Section = {
      description: 'Item Description',
      name: 'Item Name',
      menuitems: [],
    };

    const component = <SectionItem item={item} selected={true} />;

    const {toJSON} = render(component);

    const jsonComponent = toJSON();
    expect(jsonComponent?.props.style.borderBottomColor).toEqual(textPrimary)

    expect(() => render(component)).not.toThrow();
  });

  test('SectionItem being displayed correctly when selected = false', async () => {
    const item: Section = {
      description: 'Item Description',
      name: 'Item Name',
      menuitems: [],
    };

    const component = <SectionItem item={item} selected={false} />;

    const {toJSON} = render(component);

    const jsonComponent = toJSON();
    expect(jsonComponent?.props.style.borderBottomColor).toEqual('transparent')

    expect(() => render(component)).not.toThrow();
  });
});
