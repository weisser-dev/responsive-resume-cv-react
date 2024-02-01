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
    web: {
      title: string;
      url: string;
    }
    phone: string;
    email: string;
  };
}

interface ReferencesProps {
  references: Reference[];
  title: string;
  phone: string;
  email: string;
}

const References: React.FC<ReferencesProps> = ({references, title, phone, email}) => {
  return (
    <SectionComponent title={title} sectionId={"references"}>
      <ReferenceContainer>
        {references.map((ref, index) => (
          <ReferenceContent key={index}>
            <ReferenceSubtitle>{ref.title}</ReferenceSubtitle>
            <ReferenceTitle>{ref.name}</ReferenceTitle>
            {ref.contact.phone && (
              <ReferenceContact>
                {phone}: <a href={`tel:${ref.contact.phone}`}>{ref.contact.phone}</a>
              </ReferenceContact>
            )}
            {ref.contact.email && (
              <ReferenceContact>
                {email}: <a href={`mailto:${ref.contact.email}`}>{ref.contact.email}</a>
              </ReferenceContact>
            )}
            {ref.contact.web && ref.contact.web.title && ref.contact.web.url && (
              <ReferenceContact>
                {ref.contact.web.title}: <a href={ref.contact.web.url} target="_blank"
                                            rel="noopener noreferrer">{ref.contact.web.url}</a>
              </ReferenceContact>
            )}
          </ReferenceContent>
        ))}
      </ReferenceContainer>
    </SectionComponent>
  );
};

export default References;
