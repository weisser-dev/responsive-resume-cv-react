import React from 'react';
import config from '../../config.json';
import {useLanguage} from '../../hooks/useLanguage';
import {Select, Wrapper} from './LanguageSwitcher.styles';

const LanguageSwitcher: React.FC = () => {
  const {language, setLanguage} = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <Wrapper>
      <Select value={language.toUpperCase()} onChange={handleChange}>
        {config.availableLanguages.map((lang: string) => (
          <option key={lang} value={lang.toUpperCase()}>{lang.toUpperCase()}</option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default LanguageSwitcher;
