import React from 'react';
import SectionComponent from "../SectionComponent";
import {LanguageItem, LanguageName, LanguageProficiencyBar} from './Languages.styles';

interface LanguagesProps {
  languages: { [key: string]: number };
  title: string;
}

const Languages: React.FC<LanguagesProps> = ({languages, title}) => {
  const languageEntries = Object.entries(languages);

  return (
    <SectionComponent title={title} sectionId={"languages"}>
      {languageEntries.map(([language, proficiency], index) => (
        <LanguageItem key={index}>
          <LanguageName>{language}</LanguageName>
          <LanguageProficiencyBar proficiency={proficiency}>
            <div>{proficiency}%</div>
          </LanguageProficiencyBar>
        </LanguageItem>
      ))}
    </SectionComponent>
  );
};

export default Languages;
