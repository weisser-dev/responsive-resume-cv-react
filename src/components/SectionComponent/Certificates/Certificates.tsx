// src/components/Certificates/Certificates.tsx

import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  CertificateContainer,
  CertificateContent,
  CertificateDate,
  CertificateDescription,
  CertificateID,
  CertificateIDLabel,
  CertificateInfo,
  CertificateLink,
  CertificateTitle
} from './Certificates.styles';

interface Certificate {
  title: string;
  description: string;
  date: string;
  url: string;
  certificationId: string;
}

interface CertificatesProps {
  certificates: Certificate[];
  title: string;
  localizedCertId: string;
  localizedViewCert: string;
}

const Certificates: React.FC<CertificatesProps> = ({certificates, title, localizedViewCert, localizedCertId}) => {
  return (
    <SectionComponent title={title} sectionId={"certificate"}>
      <CertificateContainer>
        {certificates.map((cert, index) => (
          <CertificateContent key={index}>
            {cert.title &&
              <CertificateTitle>{cert.title}<CertificateDate>{cert.date}</CertificateDate></CertificateTitle>}
            {cert.description && <CertificateDescription>{cert.description}</CertificateDescription>}
            <CertificateInfo>
              {cert.url && <CertificateLink href={cert.url} target="_blank">{localizedViewCert}</CertificateLink>}
              {cert.certificationId && (
                <CertificateID>
                  <CertificateIDLabel>{localizedCertId}:</CertificateIDLabel> {cert.certificationId}
                </CertificateID>
              )}
            </CertificateInfo>
          </CertificateContent>
        ))}
      </CertificateContainer>
    </SectionComponent>
  );
};

export default Certificates;
