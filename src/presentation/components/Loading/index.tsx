import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoadingContainer} from './styles';
import {textSecondary} from '../../../assets/colors';

const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={textSecondary} />
    </LoadingContainer>
  );
};

export default Loading;
