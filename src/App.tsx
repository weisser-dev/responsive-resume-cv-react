import React, {useEffect, useState} from 'react';
import {loadData} from "./utils/localeLoader";
import {CVData} from './models/CVData';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import config from './config.json';
import 'boxicons/css/boxicons.min.css';
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import {useLanguage} from './hooks/useLanguage';
import {LocaleData} from "./models/LocaleData";
import Header from "./components/Header/Header";
import Certificates from "./components/SectionComponent/Certificates/Certificates";
import References from "./components/SectionComponent/References/References";
import Languages from "./components/SectionComponent/Language/Languages";
import Profile from "./components/SectionComponent/Profile/Profile";
import Interests from "./components/SectionComponent/Interests/Interests";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Home from "./components/SectionComponent/Home/Home";
import Education from "./components/SectionComponent/Education/Education";
import Experience from "./components/SectionComponent/Experience/Experience";
import Skills from "./components/SectionComponent/Skills/Skills";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import useMobileView from "./hooks/useMobileView";
import {MainContainer, ResumeContainer, ResumeLeft, ResumeRight} from "./App.styles";

function App() {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [localeData, setLocaleData] = useState<LocaleData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const {language, setLanguage} = useLanguage();
  const isMobileView = useMobileView();
  const [theme, setTheme] = useState(() => {
    if (config.defaultTheme === 'auto') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      return localStorage.getItem('theme') || 'light';
    }
  });

  useEffect(() => {
    async function fetchData() {
      const cvDataResponse = await loadData<CVData>(language, 'cv');
      const localeDataResponse = await loadData<LocaleData>(language, 'locales');
      setCvData(cvDataResponse);
      setLocaleData(localeDataResponse);
    }

    fetchData();
  }, [language]);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionElement = current as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 50;
        const sectionId = sectionElement.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      const scrollTopButton = document.getElementById('scroll-top');
      if (scrollY >= 200) {
        setShowScrollTop(true);
        scrollTopButton?.classList.add('show-scroll');
      } else {
        setShowScrollTop(false);
        scrollTopButton?.classList.remove('show-scroll');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadTheme = (themeName: string) => {
    let themeUrl = themeName === 'light' ? config.themes.light : config.themes.dark;
    if (themeName === 'print') {
      themeUrl = 'themes/print/print.css';
    }
    const existingLink = document.querySelector('link[data-theme="true"]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themeUrl;
    link.dataset.theme = 'true';
    document.head.appendChild(link);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    loadTheme(newTheme);
  };

  useEffect(() => {
    loadTheme(theme);
  }, [theme]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const generateFilename = (name: string, locale: string) => {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const formattedName = name.toLowerCase().replace(/\s+/g, '_').replace(/[^\w-]/g, '');
    return `${currentDate}_cv_${locale}_${formattedName}.pdf`;
  };

  const generateOldPdf = () => {
    document.body.classList.add('generate-pdf');
    const areaCv = document.getElementById('area-cv');
    if (areaCv && cvData) {
      const filename = generateFilename(cvData.name, language);
      const opt = {
        margin: 0,
        filename,
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 4},
        jsPDF: {format: 'a4', orientation: 'portrait'}
      };
      html2pdf().from(areaCv).set(opt).save().then(() => {
        document.body.classList.remove('generate-pdf');
      });
    }
  };

  const generatePdf = () => {
    const areaCv = document.getElementById('area-cv');
    if (areaCv && cvData) {
      document.body.classList.add('generate-pdf');
      const filename = generateFilename(cvData.name, language);
      const opt = {
        margin: [10, 0],
        filename,
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {
          scale: 4,
          useCORS: true,
          logging: true,
          backgroundColor: 'none'
        },
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
      };
      loadTheme("print");
      html2pdf().from(areaCv).set(opt).toPdf().get('pdf').then(function () {
      }).save().then(() => {
        document.body.classList.remove('generate-pdf');
        loadTheme(theme);
      });
    }
  };

  if (!cvData || !localeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header name={cvData.name} localeData={localeData} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <MainContainer>
        <ResumeContainer id="area-cv">
          <ResumeLeft>
            {isMobileView && (
              <LanguageSwitcher/>)}
            <Home name={cvData.name.toUpperCase()} profession={cvData.profession} profileImage={cvData.profileImage}
                  contact={cvData.contact} toggleTheme={toggleTheme} generatePdf={generatePdf}/>
            <SocialLinks socialLinks={cvData.socialLinks} title={localeData.social}/>
            <Profile title={localeData.profile} description={cvData.profile}/>
            <Education education={cvData.education} title={localeData.education}/>
            <Skills skills={cvData.skills} title={localeData.skills}/>
          </ResumeLeft>

          <ResumeRight>
            {!isMobileView && (
              <LanguageSwitcher/>)}
            <Experience experience={cvData.experience} title={localeData.experience}/>
            <Certificates
              certificates={cvData.certificates}
              title={localeData.certificates}
              localizedCertId={localeData.localizedCertId}
              localizedViewCert={localeData.localizedViewCert}
            />
            <References references={cvData.references} title={localeData.references}/>
            <Languages languages={cvData.languages} title={localeData.languages}/>
            <Interests interests={cvData.interests} title={localeData.interests}/>
          </ResumeRight>
        </ResumeContainer>
      </MainContainer>

      <ScrollTopButton show={showScrollTop}/>
    </div>
  );
}

export default App;
