// src/components/HomePrint/HomePrint.tsx
import React from 'react';
import {
  HomeContainer,
  HomeData,
  HomeTitle,
  ContactInfoContainer,
  IconBox,

  ContactItem, ContactLabel, ContactContent, ContactInfoWrapper
} from './HomePrint.styles';

interface SocialLinkProps {
  name: string;
  url: string;
}

interface HomePrintProps {
  name: string;
  contact: {
    address: string;
    email: string;
    phone: string;
    web: {
      title: string;
      url: string;
    }
  };
  socialLinks: SocialLinkProps[];
  titleLinks: string;
}

const HomePrint: React.FC<HomePrintProps> = ({name, contact, socialLinks}) => {

  return (
    <HomeContainer>
      <HomeData>
        <HomeTitle>{name}</HomeTitle>
        <IconBox  className="bx bx-chevron-right"  />
      </HomeData>
      <ContactInfoWrapper>
      <ContactInfoContainer>
          <ContactItem>
            <ContactLabel>Telefon</ContactLabel>
            <ContactContent>{contact.phone}</ContactContent>
          </ContactItem>
          <ContactItem>
            <ContactLabel>E-Mail</ContactLabel>
            <ContactContent>{contact.email}</ContactContent>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Links</ContactLabel>
            <ContactContent>
              {socialLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                  {index < socialLinks.length - 1 ? ', ' : ''}
                </React.Fragment>
              ))}
            </ContactContent>
          </ContactItem>
        </ContactInfoContainer>
      </ContactInfoWrapper>
    </HomeContainer>
  );
};

export default HomePrint;
