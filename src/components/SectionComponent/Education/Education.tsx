import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  EducationContainer,
  EducationContent,
  EducationData,
  EducationLine,
  EducationRounder,
  EducationStudies,
  EducationTime,
  EducationTitle,
  EducationYear
} from './Education.styles';

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
}

interface EducationProps {
  education: EducationEntry[];
  title: string;
}

const Education: React.FC<EducationProps> = ({education, title}) => {
  return (
    <SectionComponent title={title} sectionId="education">
      <EducationContainer>
        {education.map((edu, index) => (
          <EducationContent key={index}>
            {education.length > 1 && (
              <EducationTime>
                <EducationRounder/>
                {index < education.length - 1 && <EducationLine/>}
              </EducationTime>
            )}
            <EducationData>
              <EducationTitle>{edu.title}</EducationTitle>
              <EducationStudies>{edu.institution}</EducationStudies>
              <EducationYear>{edu.year}</EducationYear>
            </EducationData>
          </EducationContent>
        ))}
      </EducationContainer>
    </SectionComponent>
  );
};

export default Education;