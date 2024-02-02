import React from 'react';
import SectionComponent from "../SectionComponent";
import FormattedText from "../../FormattedText/FormattedText";
import {
  ExperienceCompany,
  ExperienceContainer,
  ExperienceContent,
  ExperienceData,
  ExperienceLine,
  ExperiencePeriod,
  ExperienceRounder,
  ExperienceTime,
  ExperienceTitle,
  SkillBubble,
  SkillsContainer
} from './Experience.styles';

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  url: string;
  skills?: string[];
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
              <a href={exp.url} target="_blank" rel="noopener noreferrer">
                <ExperienceCompany>{exp.company}</ExperienceCompany>
              </a>
              <FormattedText text={exp.description}/>
              {exp.skills && ( // Conditionally render the SkillsContainer if skills are available
                <SkillsContainer>
                  {exp.skills.map((skill, i) => (
                    <SkillBubble key={i}>{skill}</SkillBubble>
                  ))}
                </SkillsContainer>
              )}
            </ExperienceData>
          </ExperienceContent>
        ))}
      </ExperienceContainer>
    </SectionComponent>
  );
};
export default Experience;