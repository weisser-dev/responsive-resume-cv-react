import React from 'react';
import {Section, SectionTitle, SectionTitleWrapper, SectionWrapper} from './SectionComponent.styles';

interface SectionComponentProps {
  title: string;
  sectionId: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionComponentProps> = ({title, sectionId, children}) => {
  return (
    <Section>
      <SectionTitleWrapper>
        <SectionTitle id={sectionId}>{title}</SectionTitle>
      </SectionTitleWrapper>
      <SectionWrapper>
        {children}
      </SectionWrapper>
    </Section>
  );
};
export default SectionComponent;
