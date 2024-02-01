import React from 'react';
import {Section, SectionTitle} from './SectionComponent.styles';

interface SectionComponentProps {
  title: string;
  sectionId: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionComponentProps> = ({title, sectionId, children}) => {
  return (
    <Section>
      <SectionTitle id={sectionId}>{title}</SectionTitle>
      {children}
    </Section>
  );
};

export default SectionComponent;
