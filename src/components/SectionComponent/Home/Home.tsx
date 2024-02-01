// src/components/Home/Home.tsx

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
  };
  toggleTheme: () => void;
  generatePdf: () => void;
}

const Home: React.FC<HomeProps> = ({name, profession, profileImage, contact, toggleTheme, generatePdf}) => {
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
          <HomeInformation><HomeInformationIcon className="bx bx-envelope"></HomeInformationIcon> {contact.email}
          </HomeInformation>
          <HomeInformation><HomeInformationIcon className="bx bx-phone"></HomeInformationIcon> {contact.phone}
          </HomeInformation>
        </HomeAddress>
      </HomeContainer>
      <DownloadButton className="bx bx-download" title="Download PDF" onClick={generatePdf}></DownloadButton>
      <ThemeButton className="bx bx-moon" title="Toggle Theme" onClick={toggleTheme}></ThemeButton>
    </SectionComponent>
  );
};

export default Home;
