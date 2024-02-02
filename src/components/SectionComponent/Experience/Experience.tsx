import React, {useState} from 'react';
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
  ReadMoreButton,
  SkillBubble,
  SkillsContainer
} from './Experience.styles';

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  shortDescription?: string; // Optional short description
  description: string;
  url: string;
  skills?: string[];
}

interface ExperienceProps {
  experience: ExperienceEntry[];
  title: string;
  readMore: string;
  readLess: string;
}

const Experience: React.FC<ExperienceProps> = ({experience, title, readMore, readLess}) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpanded = (index: number) => {
    setExpanded(prev => ({...prev, [index]: !prev[index]}));
  };

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
              {expanded[index] ? (
                <FormattedText text={exp.description}/>
              ) : (
                <FormattedText text={exp.shortDescription || exp.description}/>
              )}
              {exp.shortDescription && (
                <ReadMoreButton onClick={() => toggleExpanded(index)}>
                  {expanded[index] ? readLess : readMore}
                </ReadMoreButton>
              )}
              {exp.skills && (
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
