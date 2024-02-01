// src/components/Interests/Interests.tsx
import React from 'react';
import SectionComponent from "../SectionComponent";
import {InterestsContainer, InterestsContent, InterestsIcon, InterestsName} from './Interests.styles';

interface InterestsProps {
  interests: { [key: string]: string };
  title: string;
}

const Interests: React.FC<InterestsProps> = ({interests, title}) => {
  const interestEntries = Object.entries(interests);

  return (
    <SectionComponent title={title} sectionId={"interests"}>
      <InterestsContainer>
        {interestEntries.map(([interest, icon], index) => (
          <InterestsContent key={index}>
            <InterestsIcon className={`bx ${icon} interests_icon`}></InterestsIcon>
            <InterestsName>{interest}</InterestsName>
          </InterestsContent>
        ))}
      </InterestsContainer>
    </SectionComponent>
  );
};

export default Interests;
