import styled from "styled-components/native";
import { background } from '../../../assets/colors';

export const HomePageContainer = styled.SafeAreaView`
  background-color: ${background};
  flex-direction: column;
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  padding: 30px;
  padding-bottom: 0px;
  flex: 1;
`;