import React from 'react';
import {PageTitleContainer, PageTitleText} from './styles';

interface PageTitleProps {
  title: string | undefined;
}

const PageTitle = ({title}: PageTitleProps) => {
  return (
    <PageTitleContainer>
      <PageTitleText>{title || ''}</PageTitleText>
    </PageTitleContainer>
  );
};

export default PageTitle;
