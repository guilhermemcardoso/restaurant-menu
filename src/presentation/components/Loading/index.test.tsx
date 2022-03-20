import * as React from 'react';
import {render} from '@testing-library/react-native';
import Loading from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Loading', () => {
  test('Loading being displayed correctly without errors', async () => {
    const component = <Loading />;

    expect(() => render(component)).not.toThrow();
  });
});
