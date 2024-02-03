// src/components/HomePrint/HomePrint.tsx

import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  DownloadButton,
  HomeAddress,
  HomeContainer,
  HomeData,
  HomeImage,
  HomeInformation,
  HomeInformationIcon,
  HomeProfession,
  HomeTitle,
  PrintButton,
  ThemeButton
} from './Home.styles';

interface HomeProps {
  name: string;
  profession: string;
  profileImage: string;
  contact: {
    address: string;
    email: string;
    phone: string;
    web: {
      title: string;
      url: string;
    }
  };
  toggleTheme: () => void;
  generatePdf: () => void;
  printAction: () => void;
}

const Home: React.FC<HomeProps> = ({
                                     name,
                                     profession,
                                     profileImage,
                                     contact,
                                     toggleTheme,
                                     generatePdf,
                                     printAction
                                   }) => {

  return (
    <SectionComponent title="" sectionId="home">
      <HomeContainer>
        <HomeData>
          <HomeImage src={profileImage} alt={name}/>
          <HomeTitle>{name.toUpperCase()}</HomeTitle>
          <HomeProfession>{profession}</HomeProfession>
        </HomeData>
        <HomeAddress>
          <HomeInformation><HomeInformationIcon className="bx bx-map"></HomeInformationIcon> {contact.address}
          </HomeInformation>
          {contact.email && (
            <HomeInformation>
              <HomeInformationIcon className="bx bx-envelope"></HomeInformationIcon>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </HomeInformation>
          )}
          {contact.phone && (
            <HomeInformation>
              <HomeInformationIcon className="bx bx-phone"></HomeInformationIcon>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </HomeInformation>
          )}
          {contact.web && contact.web.url && contact.web.title && (
            <HomeInformation>
              <HomeInformationIcon className="bx bx-link-alt"></HomeInformationIcon>
              <a href={contact.web.url} target="_blank" rel="noopener noreferrer">{contact.web.title}</a>
            </HomeInformation>
          )}
        </HomeAddress>
      </HomeContainer>
      <DownloadButton className="bx bx-download" title="Download Page as Styled PDF"
                      onClick={generatePdf}></DownloadButton>
      <PrintButton className="bx bx-printer" title="Print / Save as optimized PDF" onClick={printAction}
                   onTouchStart={printAction} onTouchEnd={printAction}></PrintButton>
      <ThemeButton className="bx bx-moon" title="Toggle Theme" onClick={toggleTheme}></ThemeButton>
    </SectionComponent>
  );
};

export default Home;
