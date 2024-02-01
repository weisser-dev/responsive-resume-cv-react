// src/components/Profile/Profile.tsx
import React from 'react';
import {ProfileDescription} from './Profile.styles';
import SectionComponent from "../SectionComponent";

interface ProfileProps {
  title: string;
  description: string;
}

const Profile: React.FC<ProfileProps> = ({title, description}) => {
  return (
    <SectionComponent title={title} sectionId={"profile"}>
      <ProfileDescription>{description}</ProfileDescription>
    </SectionComponent>
  );
};

export default Profile;
