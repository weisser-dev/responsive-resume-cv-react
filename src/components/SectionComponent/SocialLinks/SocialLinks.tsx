import React from 'react';
import SectionComponent from "../SectionComponent";
import {SocialContainer, SocialLink} from './SocialLinks.styles';

interface SocialLinkProps {
  name: string;
  url: string;
}

interface SocialLinksProps {
  socialLinks: SocialLinkProps[];
  title: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({socialLinks, title}) => {
  return (
    <SectionComponent title={title} sectionId="social">
      <SocialContainer>
        {socialLinks.map(link => (
          <SocialLink key={link.name} href={link.url} target="_blank">
            @{link.name}
          </SocialLink>
        ))}
      </SocialContainer>
    </SectionComponent>
  );
};

export default SocialLinks;
