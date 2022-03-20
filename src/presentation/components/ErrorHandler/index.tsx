import React from 'react';
import {
  ErrorHandlerContainer,
  ErrorHandlerMessage,
  ErrorHandlerActionButton,
} from './styles';

interface ErrorHandlerProps {
  message: string;
  actionLabel: string;
  actionFunction?: () => void;
}

const ErrorHandler = ({
  message,
  actionLabel,
  actionFunction,
}: ErrorHandlerProps) => {
  return (
    <ErrorHandlerContainer>
      <ErrorHandlerMessage>{message}</ErrorHandlerMessage>
      <ErrorHandlerActionButton title={actionLabel} onPress={actionFunction} />
    </ErrorHandlerContainer>
  );
};

export default ErrorHandler;
