import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorHandler from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('ErrorHandler', () => {
  test('ErrorHandler being displayed with all properties', async () => {
    const message = 'Something went wrong';
    const actionLabel = 'Try again';
    const actionFunction = jest.fn();

    const component = (
      <ErrorHandler
        message={message}
        actionLabel={actionLabel}
        actionFunction={actionFunction}
      />
    );

    const {getByText} = render(component);

    const messageComponent = getByText(message);
    const actionButton = getByText(actionLabel);

    expect(messageComponent).not.toBeNull();
    expect(actionButton).not.toBeNull();

    fireEvent.press(actionButton);

    expect(actionFunction).toHaveBeenCalled();
  });

  test('ErrorHandler being displayed with blank actionFunction', async () => {
    const message = 'Something went wrong';
    const actionLabel = 'Try again';

    const component = (
      <ErrorHandler
        message={message}
        actionLabel={actionLabel}
      />
    );

    const {getByText} = render(component);

    const messageComponent = getByText(message);
    const actionButton = getByText(actionLabel);

    expect(messageComponent).not.toBeNull();
    expect(actionButton).not.toBeNull();

    fireEvent.press(actionButton);

    expect(() => render(component)).not.toThrow();
  });

  test('ErrorHandler being displayed with empty message', async () => {
    const message = '';
    const actionLabel = 'Try again';
    const actionFunction = jest.fn();

    const component = (
      <ErrorHandler
        message={message}
        actionLabel={actionLabel}
        actionFunction={actionFunction}
      />
    );

    const {getByText} = render(component);

    const actionButton = getByText(actionLabel);

    expect(actionButton).not.toBeNull();

    fireEvent.press(actionButton);

    expect(actionFunction).toHaveBeenCalled();
    expect(() => render(component)).not.toThrow();
  });

  test('ErrorHandler being displayed with empty actionLabel', async () => {
    const message = 'Something went wrong';
    const actionLabel = '';
    const actionFunction = jest.fn();

    const component = (
      <ErrorHandler
        message={message}
        actionLabel={actionLabel}
        actionFunction={actionFunction}
      />
    );

    const {getByText} = render(component);

    const messageComponent = getByText(message);

    expect(messageComponent).not.toBeNull();

    expect(() => render(component)).not.toThrow();
  });
});
