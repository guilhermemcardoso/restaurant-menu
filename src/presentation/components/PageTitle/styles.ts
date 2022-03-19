import styled from "styled-components/native";
import { textTertiary } from '../../../assets/colors';

export const PageTitleContainer = styled.View`
  padding-top: 34px;
  padding-bottom: 27px;
`;

export const PageTitleText = styled.Text`
    font-family: 'Montserrat-Regular';
    font-size: 26px;
    line-height: 28px;
    text-align: center;
    color: ${textTertiary};
    letter-spacing: 1.86px;
`;
