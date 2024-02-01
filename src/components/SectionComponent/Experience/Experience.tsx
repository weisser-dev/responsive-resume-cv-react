// src/components/Experience/Experience.tsx
import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  ExperienceCompany,
  ExperienceContainer,
  ExperienceContent,
  ExperienceData,
  ExperienceDescription,
  ExperienceLine,
  ExperiencePeriod,
  ExperienceRounder,
  ExperienceTime,
  ExperienceTitle
} from './Experience.styles';

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  url: string;
}

interface ExperienceProps {
  experience: ExperienceEntry[];
  title: string;
}

const Experience: React.FC<ExperienceProps> = ({experience, title}) => {
  return (
    <SectionComponent title={title} sectionId="experience">
      <ExperienceContainer>
        {experience.map((exp, index) => (
          <ExperienceContent key={index}>
            <ExperienceTime>
              <ExperienceRounder/>
              {index < experience.length - 1 && <ExperienceLine/>}
            </ExperienceTime>
            <ExperienceData>
              <ExperienceTitle>{exp.title}</ExperienceTitle>
              <ExperiencePeriod>{exp.period}</ExperiencePeriod> |
              <a href={exp.url} target={"_blank"}>
                <ExperienceCompany> {exp.company}</ExperienceCompany></a>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
            </ExperienceData>
          </ExperienceContent>
        ))}
      </ExperienceContainer>
    </SectionComponent>
  );
};

export default Experience;