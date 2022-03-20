import * as React from 'react';
import {render} from '@testing-library/react-native';
import MenuTitle from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MenuTitle', () => {
  test('MenuTitle being displayed with all properties', async () => {
    const title = 'Title'

    const component = <MenuTitle title={title} />;

    const {getByText} = render(component);

    const titleComponent = getByText(title);
    
    expect(titleComponent).not.toBeNull();
    expect(() => render(component)).not.toThrow();
  });

  test('MenuTitle being displayed with empty title', async () => {
    const title = ''

    const component = <MenuTitle title={title} />;

    expect(() => render(component)).not.toThrow();
  });

  test('MenuTitle being displayed without title', async () => {

    const component = <MenuTitle title={undefined} />;

    expect(() => render(component)).not.toThrow();
  });
});
