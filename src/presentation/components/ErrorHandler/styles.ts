import styled from 'styled-components/native';
import {textPrimary, textSecondary} from '../../../assets/colors';

export const ErrorHandlerContainer = styled.View`
  padding-top: 36px;
  padding: 36px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ErrorHandlerMessage = styled.Text`
  font-family: 'PlayfairDisplay-Regular';
  letter-spacing: 0px;
  font-size: 30px;
  line-height: 48px;
  margin-bottom: 20px;
  text-align: center;
  color: ${textSecondary};
`;

export const ErrorHandlerActionButton = styled.Button`
  font-family: 'PlayfairDisplay-Regular';
  letter-spacing: 0px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${textPrimary};
`;