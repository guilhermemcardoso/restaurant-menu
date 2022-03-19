import styled from 'styled-components/native';
import {textPrimary, textSecondary} from '../../../assets/colors';

export const MenuItemContainer = styled.TouchableOpacity`
  padding-top: 36px;
  padding-bottom: 36px;
  justify-content: center;
  align-items: center;
`;

export const MenuItemName = styled.Text`
  font-family: 'PlayfairDisplay-Regular';
  letter-spacing: -0.96px;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: ${textPrimary};
`;

export const MenuItemDescription = styled.Text`
  font-family: 'PlayfairDisplay-Regular';
  letter-spacing: 0px;
  font-size: 30px;
  line-height: 48px;
  margin-top: 20px;
  text-align: center;
  color: ${textSecondary};
`;

export const MenuItemPrice = styled.Text`
  font-family: 'Montserrat-Regular';
  letter-spacing: 0px;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  margin-top: 30px;
  color: ${textSecondary};
`;
