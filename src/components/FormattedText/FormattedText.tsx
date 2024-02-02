import React from 'react';
import {TextLine, TextWrapper} from './FormattedText.styles';

interface FormattedTextProps {
  text: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
  const lines = text.split(/<br\s*\/?>|\n/gi);

  return (
    <TextWrapper>
      {lines.map((line, index) => (
        <TextLine key={index}>{line}</TextLine>
      ))}
     </TextWrapper>
  );
};

export default FormattedText;
