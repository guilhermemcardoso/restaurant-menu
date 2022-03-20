import * as React from 'react';
import {render} from '@testing-library/react-native';
import EmptyMenuItemList from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('EmptyMenuItemList', () => {
  test('Home Screen being displayed', async () => {
    const message = 'Empty List';

    const component = <EmptyMenuItemList message={message} />;

    const {getByText} = render(component);

    const messageComponent = getByText(message);
    expect(messageComponent).not.toBeNull();
  });

  test('Home Screen being displayed with empty message', async () => {
    const message = '';

    const component = <EmptyMenuItemList message={message} />;

    expect(() => render(component)).not.toThrow();
  });
});
