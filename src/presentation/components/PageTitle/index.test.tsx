import * as React from 'react';
import {render} from '@testing-library/react-native';
import PageTitle from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('PageTitle', () => {
  test('PageTitle being displayed with all properties', async () => {
    const title = 'Title'

    const component = <PageTitle title={title} />;

    const {getByText} = render(component);

    const titleComponent = getByText(title);
    
    expect(titleComponent).not.toBeNull();
    expect(() => render(component)).not.toThrow();
  });

  test('PageTitle being displayed with empty title', async () => {
    const title = ''

    const component = <PageTitle title={title} />;

    expect(() => render(component)).not.toThrow();
  });

  test('PageTitle being displayed without title', async () => {

    const component = <PageTitle title={undefined} />;

    expect(() => render(component)).not.toThrow();
  });
});
