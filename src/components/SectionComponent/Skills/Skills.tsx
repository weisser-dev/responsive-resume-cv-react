// src/components/Skills/Skills.tsx
import React from 'react';
import SectionComponent from '../SectionComponent';
import {ProficiencyContainer, ProficiencyDot, SkillItem, SkillName, SkillsContainer} from './Skills.styles';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsProps {
  skills: Skill[];
  title: string;
}

const Skills: React.FC<SkillsProps> = ({skills, title}) => {
  const renderProficiencyDots = (proficiency: number) => {
    return Array.from({length: 5}, (_, i) => (
      <ProficiencyDot key={i} filled={i < proficiency}/>
    ));
  };

  return (
    <SectionComponent title={title} sectionId="skills">
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <ProficiencyContainer>
              {renderProficiencyDots(skill.proficiency)}
            </ProficiencyContainer>
          </SkillItem>
        ))}
      </SkillsContainer>
    </SectionComponent>
  );
};

export default Skills;
