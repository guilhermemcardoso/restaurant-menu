import styled from 'styled-components/native';
import {disabled, textPrimary} from '../../../assets/colors';

interface ItemProps {
  selected?: boolean;
}

export const SectionItemContainer = styled.TouchableOpacity<ItemProps>`
  padding-top: 36px;
  padding-bottom: 36px;
  padding-right: 6px;
  padding-left: 6px;
  margin-right: 24px;
  margin-left: 24px;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${props => (props.selected ? textPrimary : 'transparent')};
  border-bottom-width: ${props => (props.selected ? '2px' : '0px')};
`;

export const SectionItemText = styled.Text<ItemProps>`
  font-family: 'Montserrat-Regular';
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: ${textPrimary};
  color: ${props => (props.selected ? textPrimary : disabled)};
`;
