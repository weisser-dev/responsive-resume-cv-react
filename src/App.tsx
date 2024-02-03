import React, {useEffect, useRef, useState} from 'react';
import {loadData} from "./utils/localeLoader";
import {CVData} from './models/CVData';
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
import SocialLinks from "./components/SectionComponent/SocialLinks/SocialLinks";
import Home from "./components/SectionComponent/Home/Home";
import Education from "./components/SectionComponent/Education/Education";
import Experience from "./components/SectionComponent/Experience/Experience";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import useMobileView from "./hooks/useMobileView";
import {MainContainer, ResumeContainer, ResumeLeft, ResumeRight} from "./App.styles";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import Skills from "./components/SectionComponent/Skills/Skills";
import Loader from "./components/Loader/Loader";
import HomePrint from "./components/SectionComponent/HomePrint/HomePrint";

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
  const [isPrintMode, setIsPrintMode] = useState(false);

  const printCallbackRef = useRef<() => void | null>();

  useEffect(() => {
    const originalTitle = document.title;
    const handleBeforePrint = () => {
      setIsPrintMode(true);
      if (cvData) {
        document.title = generateFilename(cvData.name, language);
      }
      loadTheme("print"); // Assuming you have a print theme configured
    };
    const handleAfterPrint = () => {
      setIsPrintMode(false);
      document.title = originalTitle;
      loadTheme(theme); // Revert to the previous theme
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    printCallbackRef.current = handlePrintAction;

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const printAction = () => {
    // Set print mode and load print theme
    setIsPrintMode(true);
    loadTheme("print");

    // Wait for the theme to load, then trigger the print
    setTimeout(() => {
      window.print();

      // Reset to the previous theme and print mode after printing
      setTimeout(() => {
        setIsPrintMode(false);
        loadTheme(theme);
      }, 100);
    }, 100);
  };


  const handlePrintAction = () => {
    if (printCallbackRef.current) {
      printCallbackRef.current();
    }
  };

  useEffect(() => {
    async function fetchData() {
      // Load CV data and locale data
      const cvDataResponse = await loadData<CVData>(language, 'cv');
      const localeDataResponse = await loadData<LocaleData>(language, 'locales');

      // Merge with empty defaults to ensure all properties exist
      const cvData = {
        name: '',
        profession: '',
        profileImage: '',
        contact: {address: '', email: '', phone: '', web: {title: '', url: ''}},
        socialLinks: [],
        profile: '',
        education: [],
        experience: [],
        certificates: [],
        references: [],
        skills: [],
        languages: {},
        interests: {},
        ...cvDataResponse // Spread operator to overwrite defaults with actual data
      };

      setCvData(cvData);
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
    if (themeName == "print") {
      themeUrl = config.themes.print;
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
    // safari magic
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    const rootStyle = getComputedStyle(document.documentElement);
    const themeColor = rootStyle.getPropertyValue('--body-color').trim();
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeColor);
    }
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

  const generatePdf = () => {
    const areaCv = document.getElementById('area-cv');
    if (areaCv && cvData) {
      document.body.classList.add('generate-pdf');
      html2canvas(areaCv, {scale: 1, useCORS: true}).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Convert canvas dimensions to mm for PDF
        const scale = 0.2645833333; // Pixel to mm conversion factor
        const widthInMm = imgWidth * scale;
        const heightInMm = imgHeight * scale;

        const pdf = new jspdf({
          orientation: imgWidth > imgHeight ? 'l' : 'p',
          unit: 'mm',
          format: [widthInMm, heightInMm]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, widthInMm, heightInMm);

        // Iterate over all links and add to PDF
        areaCv.querySelectorAll('a').forEach(link => {
          const rect = link.getBoundingClientRect();
          const offsetX = (rect.left - areaCv.offsetLeft) * scale;
          const offsetY = (rect.top - areaCv.offsetTop) * scale;
          const width = rect.width * scale;
          const height = rect.height * scale;

          // Add clickable area for the link
          pdf.link(offsetX, offsetY, width, height, {url: link.href});
        });

        document.body.classList.remove('generate-pdf');
        pdf.save(generateFilename(cvData.name, language));
      });
    }
  };

  if (!cvData || !localeData) {
    return (
      <>
        <Loader/>
      </>
    );
  }

  let printIndex = 1;
  return (
    <div>
      <Header
        cvData={cvData}
        localeData={localeData}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <MainContainer>
        {!isPrintMode ? (
            <ResumeContainer id="area-cv">

              <ResumeLeft>
                {isMobileView && <LanguageSwitcher/>}

                {cvData && <Home
                  name={cvData.name.toUpperCase()}
                  profession={cvData.profession}
                  profileImage={cvData.profileImage}
                  contact={cvData.contact}
                  toggleTheme={toggleTheme}
                  generatePdf={generatePdf}
                  printAction={printAction}
                />}
                {cvData?.socialLinks.length > 0 &&
                  <SocialLinks socialLinks={cvData.socialLinks} title={localeData?.social}/>}
                {cvData?.profile && <Profile title={localeData?.profile} description={cvData.profile}/>}
                {cvData?.education.length > 0 && <Education education={cvData.education} title={localeData?.education}/>}
                {cvData?.languages.length > 0 && <Languages languages={cvData.languages} title={localeData?.languages}/>}
                {cvData?.interests && <Interests interests={cvData.interests} title={localeData?.interests}/>}
              </ResumeLeft>

              <ResumeRight>
                {!isMobileView && <LanguageSwitcher/>}
                {cvData?.skills.length > 0 && <Skills skills={cvData.skills} title={localeData?.skills}/>}
                {cvData?.experience.length > 0 &&
                  <Experience experience={cvData.experience} title={localeData?.experience}
                              readMore={localeData?.readMore} readLess={localeData?.readLess}/>}
                {cvData?.certificates.length > 0 && <Certificates
                  certificates={cvData.certificates}
                  title={localeData?.certificates}
                  localizedCertId={localeData?.localizedCertId}
                  localizedViewCert={localeData?.localizedViewCert}
                />}
                {cvData?.references.length > 0 &&
                  <References references={cvData.references} title={localeData?.references}
                              email={localeData?.referencesemail} phone={localeData?.referencesphone}/>}
              </ResumeRight>
            </ResumeContainer>)
          : (
            <ResumeContainer id="area-cv">
              {cvData && <HomePrint
                name={cvData.name}
                contact={cvData.contact}
                socialLinks={cvData.socialLinks}
                titleLinks={localeData?.social}
              />}
              {cvData?.profile &&
                <Profile title={"0" + printIndex++ + "   " + localeData?.profile} description={cvData.profile}/>}
              {cvData?.experience.length > 0 &&
                <Experience experience={cvData.experience} title={"0" + printIndex++ + "   " + localeData?.experience}
                            readMore={localeData?.readMore} readLess={localeData?.readLess}/>}
              {cvData?.education.length > 0 &&
                <Education education={cvData.education} title={"0" + printIndex++ + "   " + localeData?.education}/>}

              {cvData?.skills.length > 0 &&
                <Skills skills={cvData.skills} title={"0" + printIndex++ + "   " + localeData?.skills}/>}
              {cvData?.languages &&
                <Languages languages={cvData.languages} title={"0" + printIndex++ + "   " + localeData?.languages}/>}
              {cvData?.references.length > 0 &&
                <References references={cvData.references} title={"0" + printIndex++ + "   " + localeData?.references}
                            email={localeData?.referencesemail} phone={localeData?.referencesphone}/>}
              {cvData?.certificates.length > 0 && <Certificates
                certificates={cvData.certificates}
                title={"0" + printIndex++ + "   " + localeData?.certificates}
                localizedCertId={localeData?.localizedCertId}
                localizedViewCert={localeData?.localizedViewCert}
              />}
              {cvData?.interests &&
                <Interests interests={cvData.interests} title={"0" + printIndex++ + "   " + localeData?.interests}/>}
            </ResumeContainer>
          )
        }
      </MainContainer>

      <ScrollTopButton show={showScrollTop}/>
    </div>
  );
}

export default App;
