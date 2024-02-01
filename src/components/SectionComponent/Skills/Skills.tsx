import React from 'react';
import SectionComponent from '../SectionComponent';
import {SkillItem, SkillsContainer} from './Skills.styles';


interface SkillsProps {
  skills: string[];
  title: string;
}

const Skills: React.FC<SkillsProps> = ({skills, title}) => {
  return (
    <SectionComponent title={title} sectionId="skills">
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {skill}
          </SkillItem>
        ))}
      </SkillsContainer>
    </SectionComponent>
  );
};

export default Skills;
