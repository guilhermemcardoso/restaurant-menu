import styled from "styled-components/native";
import { primaryDivider } from '../../../assets/colors';

interface DividerContainerProps {
  color?: string;
}

export const DividerContainer = styled.View<DividerContainerProps>`
  background-color: ${props => props.color ? props.color : primaryDivider};
  height: 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;