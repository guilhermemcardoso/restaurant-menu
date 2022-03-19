import styled from 'styled-components/native';
import {textPrimary, textSecondary} from '../../../assets/colors';

export const EmptyMenuItemListContainer = styled.View`
  padding-top: 36px;
  padding-bottom: 36px;
  padding-right: 6px;
  padding-left: 6px;
  margin-right: 24px;
  margin-left: 24px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EmptyMenuItemListMessage = styled.Text`
  font-family: 'PlayfairDisplay-Regular';
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: ${textSecondary};
`;
