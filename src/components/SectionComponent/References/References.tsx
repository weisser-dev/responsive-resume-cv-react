import React from 'react';
import SectionComponent from '../SectionComponent';
import {
  ReferenceContact,
  ReferenceContainer,
  ReferenceContent,
  ReferenceSubtitle,
  ReferenceTitle,
} from './References.styles';

interface Reference {
  title: string;
  name: string;
  contact: {
    phone: string;
    email: string;
  };
}

interface ReferencesProps {
  references: Reference[];
  title: string;
}

const References: React.FC<ReferencesProps> = ({references, title}) => {
  return (
    <SectionComponent title={title} sectionId={"references"}>
      <ReferenceContainer>
        {references.map((ref, index) => (
          <ReferenceContent key={index}>
            <ReferenceSubtitle>{ref.title}</ReferenceSubtitle>
            <ReferenceTitle>{ref.name}</ReferenceTitle>
            <ReferenceContact>Phone: {ref.contact.phone}</ReferenceContact>
            <ReferenceContact>Email: {ref.contact.email}</ReferenceContact>
          </ReferenceContent>
        ))}
      </ReferenceContainer>
    </SectionComponent>
  );
};

export default References;
