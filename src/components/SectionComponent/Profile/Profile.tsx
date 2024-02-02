// src/components/Profile/Profile.tsx
import React from 'react';
import {ProfileDescription} from './Profile.styles';
import SectionComponent from "../SectionComponent";
import FormattedText from "../../FormattedText/FormattedText";

interface ProfileProps {
  title: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({title, description}) => {
  return (
    <SectionComponent title={title} sectionId={"profile"}>
      <ProfileDescription>
        <FormattedText text={description}/>
      </ProfileDescription>
    </SectionComponent>
  );
};

export default Profile;
