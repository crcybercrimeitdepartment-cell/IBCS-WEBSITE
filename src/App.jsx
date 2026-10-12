import { lazy, Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer';
import PageLoader from './components/common/PageLoader';
import ScrollToTop from './components/common/ScrollToTop';

// Route-level code splitting for detail pages
const SoftwareDevelopmentProductEngineeringPage = lazy(() => import('./pages/HomePage/SoftwareDevelopmentProductEngineeringPage/SoftwareDevelopmentProductEngineeringPage'));
const IntellectualPropertyPage = lazy(() => import('./pages/HomePage/IntellectualPropertyPage/IntellectualPropertyPage'));
const SoftwareProductCommercialisationPage = lazy(() => import('./pages/HomePage/SoftwareProductCommercialisationPage/SoftwareProductCommercialisationPage'));
const ProductDevelopmentLifecyclePage = lazy(() => import('./pages/HomePage/ProductDevelopmentLifecyclePage/ProductDevelopmentLifecyclePage'));
const OurProductEcosystemPage = lazy(() => import('./pages/HomePage/OurProductEcosystemPage/OurProductEcosystemPage'));
const OurTechnologyPage = lazy(() => import('./pages/HomePage/OurTechnologyPage/OurTechnologyPage'));
const ArtificialIntelligenceIntelligentSoftwarePage = lazy(() => import('./pages/HomePage/ArtificialIntelligenceIntelligentSoftwarePage/ArtificialIntelligenceIntelligentSoftwarePage'));
const CloudSaasAndDigitalPlatformsPage = lazy(() => import('./pages/HomePage/CloudSaasDigitalPlatformsPage/CloudSaasAndDigitalPlatformsPage'));
const DataAnalyticsAndIntelligenceTechnologyPage = lazy(() => import('./pages/HomePage/DataAnalyticsIntelligenceTechnologyPage/DataAnalyticsAndIntelligenceTechnologyPage'));
const ApisIntegrationDigitalConnectivityPage = lazy(() => import('./pages/HomePage/ApisIntegrationDigitalConnectivityPage/ApisIntegrationDigitalConnectivityPage'));
const EducationTrainingSkillDevelopmentTechnologyPage = lazy(() => import('./pages/HomePage/EducationTrainingSkillDevelopmentTechnologyPage/EducationTrainingSkillDevelopmentTechnologyPage'));
const EnterpriseBusinessSoftwareProductsPage = lazy(() => import('./pages/HomePage/EnterpriseBusinessSoftwareProductsPage/EnterpriseBusinessSoftwareProductsPage'));
const GovernmentPublicTechnologyPage = lazy(() => import('./pages/HomePage/GovernmentPublicTechnologyPage/GovernmentPublicTechnologyPage'));
const InvestigationLegalInstitutionalTechnologyPage = lazy(() => import('./pages/HomePage/InvestigationLegalInstitutionalTechnologyPage/InvestigationLegalInstitutionalTechnologyPage'));
const SoftwareArchitectureProductEngineeringPage = lazy(() => import('./pages/HomePage/SoftwareArchitectureProductEngineeringPage/SoftwareArchitectureProductEngineeringPage'));

// 4 New Pages
const GlobalInfrastructureManagedServicesPage = lazy(() => import('./pages/HomePage/GlobalInfrastructureManagedServicesPage/GlobalInfrastructureManagedServicesPage'));
const DevOpsContinuousDeliveryPage = lazy(() => import('./pages/HomePage/DevOpsContinuousDeliveryPage/DevOpsContinuousDeliveryPage'));
const DigitalExperienceDesignPage = lazy(() => import('./pages/HomePage/DigitalExperienceDesignPage/DigitalExperienceDesignPage'));
const RegulatoryComplianceGovernancePage = lazy(() => import('./pages/HomePage/RegulatoryComplianceGovernancePage/RegulatoryComplianceGovernancePage'));
const IntroductionPage = lazy(() => import('./pages/HomePage/IntroductionPage/IntroductionPage'));
const SoftwareProductPage = lazy(() => import('./pages/SoftwareProducts/SoftwareProductPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUs/AboutUsPage'));
const GalleryPage = lazy(() => import('./pages/Gallery/GalleryPage'));
const FollowPage = lazy(() => import('./pages/Follow/FollowPage'));
const CareerPage = lazy(() => import('./pages/Careers/CareerPage'));
const CybersecurityDigitalSecurityPage = lazy(() => import('./pages/HomePage/CybersecurityDigitalSecurityPage/CybersecurityDigitalSecurityPage'));
const CopyRightPage = lazy(() => import('./pages/AboutUs/CopyRight/CopyRightPage'));
const MeaningBehindOurNamePage = lazy(() => import('./pages/AboutUs/MeaningBehindOurName/MeaningBehindOurNamePage'));
const SkillDevelopmentPage = lazy(() => import('./pages/SkillDevelopment/SkillDevelopmentPage.jsx'));
const SoftwareLibraryPage = lazy(() => import('./pages/SoftwareLibrary/SoftwareLibraryPage'));

// Root App Component
export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSdpePageOpen, setIsSdpePageOpen] = useState(false);
  const [isIpPageOpen, setIsIpPageOpen] = useState(false);
  const [isSpcPageOpen, setIsSpcPageOpen] = useState(false);
  const [isPdlPageOpen, setIsPdlPageOpen] = useState(false);
  const [isOpePageOpen, setIsOpePageOpen] = useState(false);
  const [isOtPageOpen, setIsOtPageOpen] = useState(false);
  const [isAiPageOpen, setIsAiPageOpen] = useState(false);
  const [isCloudPageOpen, setIsCloudPageOpen] = useState(false);
  const [isDaPageOpen, setIsDaPageOpen] = useState(false);
  const [isApisPageOpen, setIsApisPageOpen] = useState(false);
  const [isEduPageOpen, setIsEduPageOpen] = useState(false);
  const [isEntPageOpen, setIsEntPageOpen] = useState(false);
  const [isGovPageOpen, setIsGovPageOpen] = useState(false);
  const [isInvPageOpen, setIsInvPageOpen] = useState(false);
  const [isArchPageOpen, setIsArchPageOpen] = useState(false);
  const [isGlobalInfraPageOpen, setIsGlobalInfraPageOpen] = useState(false);
  const [isDevOpsPageOpen, setIsDevOpsPageOpen] = useState(false);
  const [isDigitalExpPageOpen, setIsDigitalExpPageOpen] = useState(false);
  const [isRegulatoryPageOpen, setIsRegulatoryPageOpen] = useState(false);
  const [isSoftwareProductPageOpen, setIsSoftwareProductPageOpen] = useState(false);
  const [isAboutUsPageOpen, setIsAboutUsPageOpen] = useState(false);
  const [isGalleryPageOpen, setIsGalleryPageOpen] = useState(false);
  const [isFollowPageOpen, setIsFollowPageOpen] = useState(false);
  const [isCareerPageOpen, setIsCareerPageOpen] = useState(false);
  const [isCybersecurityPageOpen, setIsCybersecurityPageOpen] = useState(false);
  const [isCopyrightPageOpen, setIsCopyrightPageOpen] = useState(false);
  const [isMeaningPageOpen, setIsMeaningPageOpen] = useState(false);
  const [isSkillDevPageOpen, setIsSkillDevPageOpen] = useState(false);
  const [isIntroductionPageOpen, setIsIntroductionPageOpen] = useState(false);
  const [isSoftwareLibraryPageOpen, setIsSoftwareLibraryPageOpen] = useState(false);

  // Initial fast platform loading transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const activePageKey = isSdpePageOpen
    ? 'sdpe'
    : isIpPageOpen
      ? 'ip'
      : isSpcPageOpen
        ? 'spc'
        : isPdlPageOpen
          ? 'pdl'
          : isOpePageOpen
            ? 'ope'
            : isOtPageOpen
              ? 'ot'
              : isAiPageOpen
                ? 'ai'
                : isCloudPageOpen
                  ? 'cloud'
                  : isDaPageOpen
                    ? 'da'
                    : isApisPageOpen
                      ? 'apis'
                      : isEduPageOpen
                        ? 'edu'
                        : isEntPageOpen
                          ? 'ent'
                          : isGovPageOpen
                            ? 'gov'
                            : isInvPageOpen
                              ? 'inv'
                              : isArchPageOpen
                                ? 'arch'
                                : isGlobalInfraPageOpen
                                  ? 'global-infra'
                                  : isDevOpsPageOpen
                                    ? 'devops'
                                    : isDigitalExpPageOpen
                                      ? 'digital-exp'
                                       : isRegulatoryPageOpen
                                         ? 'regulatory'
                                           : isSoftwareProductPageOpen
                                             ? 'software-products'
                                             : isAboutUsPageOpen
                                               ? 'about-us'
                                               : isGalleryPageOpen
                                                 ? 'gallery'
                                                 : isFollowPageOpen
                                                   ? 'follow'
                                                   : isCareerPageOpen
                                                     ? 'careers'
                                                     : isCybersecurityPageOpen
                                                       ? 'cybersecurity'
                                                       : isSoftwareLibraryPageOpen
                                                         ? 'software-library'
                                                         : 'home';

  const isAnyDetailPageOpen =
    isSdpePageOpen ||
    isIpPageOpen ||
    isSpcPageOpen ||
    isPdlPageOpen ||
    isOpePageOpen ||
    isOtPageOpen ||
    isAiPageOpen ||
    isCloudPageOpen ||
    isDaPageOpen ||
    isApisPageOpen ||
    isEduPageOpen ||
    isEntPageOpen ||
    isGovPageOpen ||
    isInvPageOpen ||
    isArchPageOpen ||
    isGlobalInfraPageOpen ||
    isDevOpsPageOpen ||
    isDigitalExpPageOpen ||
    isRegulatoryPageOpen ||
    isSoftwareProductPageOpen ||
    isAboutUsPageOpen ||
    isGalleryPageOpen ||
    isFollowPageOpen ||
    isCareerPageOpen ||
    isCybersecurityPageOpen ||
    isCopyrightPageOpen ||
    isMeaningPageOpen ||
    isSkillDevPageOpen ||
    isIntroductionPageOpen ||
    isSoftwareLibraryPageOpen;

  useEffect(() => {
    const handleHash = () => {
      const resetAll = () => {
        setIsSdpePageOpen(false);
        setIsIpPageOpen(false);
        setIsSpcPageOpen(false);
        setIsPdlPageOpen(false);
        setIsOpePageOpen(false);
        setIsOtPageOpen(false);
        setIsAiPageOpen(false);
        setIsCloudPageOpen(false);
        setIsDaPageOpen(false);
        setIsApisPageOpen(false);
        setIsEduPageOpen(false);
        setIsEntPageOpen(false);
        setIsGovPageOpen(false);
        setIsInvPageOpen(false);
        setIsArchPageOpen(false);
        setIsGlobalInfraPageOpen(false);
        setIsDevOpsPageOpen(false);
        setIsDigitalExpPageOpen(false);
        setIsRegulatoryPageOpen(false);
        setIsSoftwareProductPageOpen(false);
        setIsAboutUsPageOpen(false);
        setIsGalleryPageOpen(false);
        setIsFollowPageOpen(false);
        setIsCareerPageOpen(false);
        setIsCybersecurityPageOpen(false);
        setIsCopyrightPageOpen(false);
        setIsMeaningPageOpen(false);
        setIsSkillDevPageOpen(false);
        setIsIntroductionPageOpen(false);
        setIsSoftwareLibraryPageOpen(false);
      };

      if (window.location.hash === '#sdpe-page') {
        resetAll(); setIsSdpePageOpen(true);
      } else if (window.location.hash === '#ip-page') {
        resetAll(); setIsIpPageOpen(true);
      } else if (window.location.hash === '#spc-page') {
        resetAll(); setIsSpcPageOpen(true);
      } else if (window.location.hash === '#pdl-page' || window.location.hash === '#product-development-lifecycle-page') {
        resetAll(); setIsPdlPageOpen(true);
      } else if (window.location.hash === '#our-product-ecosystem-page' || window.location.hash === '#ope-page') {
        resetAll(); setIsOpePageOpen(true);
      } else if (window.location.hash === '#our-technology-page' || window.location.hash === '#ot-page') {
        resetAll(); setIsOtPageOpen(true);
      } else if (
        window.location.hash === '#artificial-intelligence-intelligent-software-page' ||
        window.location.hash === '#ai-page'
      ) {
        resetAll(); setIsAiPageOpen(true);
      } else if (
        window.location.hash === '#cloud-saas-digital-platforms-page' ||
        window.location.hash === '#cloud-saas-page'
      ) {
        resetAll(); setIsCloudPageOpen(true);
      } else if (
        window.location.hash === '#data-analytics-intelligence-technology-page' ||
        window.location.hash === '#da-page'
      ) {
        resetAll(); setIsDaPageOpen(true);
      } else if (
        window.location.hash === '#apis-integration-page' ||
        window.location.hash === '#apis-integration-digital-connectivity-page' ||
        window.location.hash === '#apis-integration-digital-connectivity'
      ) {
        resetAll(); setIsApisPageOpen(true);
      } else if (window.location.hash === '#education-training-page' || window.location.hash === '#education-training-skill-development-technology-page') {
        resetAll(); setIsEduPageOpen(true);
      } else if (window.location.hash === '#enterprise-business-page' || window.location.hash === '#enterprise-business-software-products-page') {
        resetAll(); setIsEntPageOpen(true);
      } else if (window.location.hash === '#government-public-page' || window.location.hash === '#government-public-technology-page') {
        resetAll(); setIsGovPageOpen(true);
      } else if (window.location.hash === '#investigation-legal-page' || window.location.hash === '#investigation-legal-institutional-technology-page') {
        resetAll(); setIsInvPageOpen(true);
      } else if (window.location.hash === '#software-architecture-page' || window.location.hash === '#software-architecture-product-engineering-page') {
        resetAll(); setIsArchPageOpen(true);
      } else if (window.location.hash === '#global-infrastructure-page' || window.location.hash === '#global-infrastructure-managed-services-page') {
        resetAll(); setIsGlobalInfraPageOpen(true);
      } else if (window.location.hash === '#devops-page' || window.location.hash === '#devops-continuous-delivery-page') {
        resetAll(); setIsDevOpsPageOpen(true);
      } else if (window.location.hash === '#digital-experience-page' || window.location.hash === '#digital-experience-design-page') {
        resetAll(); setIsDigitalExpPageOpen(true);
      } else if (window.location.hash === '#regulatory-compliance-page' || window.location.hash === '#regulatory-compliance-governance-page') {
        resetAll(); setIsRegulatoryPageOpen(true);
      } else if (window.location.hash === '#software-products' || window.location.hash === '#software-products-page' || window.location.hash === '#software-product-page') {
        resetAll(); setIsSoftwareProductPageOpen(true);
      } else if (window.location.hash === '#about-us' || window.location.hash === '#about-us-page' || window.location.hash === '#about') {
        resetAll(); setIsAboutUsPageOpen(true);
      } else if (window.location.hash === '#gallery' || window.location.hash === '#gallery-page') {
        resetAll(); setIsGalleryPageOpen(true);
      } else if (window.location.hash === '#follow' || window.location.hash === '#follow-page' || window.location.hash === '#follow-us') {
        resetAll(); setIsFollowPageOpen(true);
      } else if (
        window.location.hash === '#careers' ||
        window.location.hash === '#career' ||
        window.location.hash === '#careers-page' ||
        window.location.hash === '#career-page' ||
        window.location.hash.startsWith('#/vacancies') ||
        window.location.hash.startsWith('#/current-vacancies') ||
        window.location.hash.startsWith('#/job-vacancy') ||
        window.location.hash.startsWith('#/full-time') ||
        window.location.hash.startsWith('#/part-time') ||
        window.location.hash.startsWith('#/internship') ||
        window.location.hash.startsWith('#/remote-job') ||
        window.location.hash.startsWith('#/post-vacancy') ||
        window.location.hash.startsWith('#/policies') ||
        window.location.hash.startsWith('#/recruitment-policies') ||
        window.location.hash.startsWith('#/rules') ||
        window.location.hash.startsWith('#/verification') ||
        window.location.hash.startsWith('#/document-verification') ||
        window.location.hash.startsWith('#/department') ||
        window.location.hash.startsWith('#/portal') ||
        window.location.hash.startsWith('#/online-portal') ||
        window.location.hash.startsWith('#/online-application-portal') ||
        window.location.hash.startsWith('#/advertisement') ||
        window.location.hash.startsWith('#/press') ||
        window.location.hash.startsWith('#/notices') ||
        window.location.hash.startsWith('#/status') ||
        window.location.hash.startsWith('#/application-status') ||
        window.location.hash.startsWith('#/check-status') ||
        window.location.hash.startsWith('#/resume') ||
        window.location.hash.startsWith('#/submit-resume')
      ) {
        resetAll(); setIsCareerPageOpen(true);
      } else if (
        window.location.hash === '#cybersecurity-digital-security-page' ||
        window.location.hash === '#cybersecurity-page' ||
        window.location.hash === '#cybersecurity'
      ) {
        resetAll(); setIsCybersecurityPageOpen(true);
      } else if (
        window.location.hash === '#copyright-page' ||
        window.location.hash === '#copyright' ||
        window.location.hash === '#copyright-policy' ||
        window.location.hash === '#about-us-copyright'
      ) {
        resetAll(); setIsCopyrightPageOpen(true);
      } else if (
        window.location.hash === '#meaning-behind-our-name-page' ||
        window.location.hash === '#meaning-behind-our-name' ||
        window.location.hash === '#meaning-page' ||
        window.location.hash === '#meaning-behind-our-name-card'
      ) {
        resetAll(); setIsMeaningPageOpen(true);
      } else if (
        window.location.hash === '#skill-development-page' ||
        window.location.hash === '#skill-development' ||
        window.location.hash === '#skill-dev' ||
        window.location.hash === '#skill-dev-page'
      ) {
        resetAll(); setIsSkillDevPageOpen(true);
      } else if (
        window.location.hash === '#introduction-page' ||
        window.location.hash === '#introduction'
      ) {
        resetAll(); setIsIntroductionPageOpen(true);
      } else if (
        window.location.hash === '#software-library-page' ||
        window.location.hash === '#software-library' ||
        window.location.hash === '#software-library-section'
      ) {
        resetAll(); setIsSoftwareLibraryPageOpen(true);
      } else {
        resetAll();
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (isAnyDetailPageOpen) {
      const forceScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      forceScrollTop();
      requestAnimationFrame(forceScrollTop);
      const timer1 = setTimeout(forceScrollTop, 30);
      const timer2 = setTimeout(forceScrollTop, 100);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isAnyDetailPageOpen, isSdpePageOpen, isIpPageOpen, isSpcPageOpen, isPdlPageOpen, isOpePageOpen, isOtPageOpen, isAiPageOpen, isCloudPageOpen, isDaPageOpen, isApisPageOpen, isEduPageOpen, isEntPageOpen, isGovPageOpen, isInvPageOpen, isArchPageOpen, isGlobalInfraPageOpen, isDevOpsPageOpen, isDigitalExpPageOpen, isRegulatoryPageOpen, isSoftwareProductPageOpen, isAboutUsPageOpen, isGalleryPageOpen, isFollowPageOpen, isCareerPageOpen, isCybersecurityPageOpen, isCopyrightPageOpen, isSkillDevPageOpen, isIntroductionPageOpen, isSoftwareLibraryPageOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const openSdpe = () => { setIsSdpePageOpen(true); scrollToTop(); };
  const openIp = () => { setIsIpPageOpen(true); scrollToTop(); };
  const openSpc = () => { setIsSpcPageOpen(true); scrollToTop(); };
  const openPdl = () => { setIsPdlPageOpen(true); scrollToTop(); };
  const openOpe = () => { setIsOpePageOpen(true); scrollToTop(); };
  const openOt = () => { setIsOtPageOpen(true); scrollToTop(); };
  const openAi = () => { setIsAiPageOpen(true); scrollToTop(); };
  const openCloud = () => { setIsCloudPageOpen(true); scrollToTop(); };
  const openDa = () => { setIsDaPageOpen(true); scrollToTop(); };
  const openApis = () => { setIsApisPageOpen(true); scrollToTop(); };
  const openEdu = () => { setIsEduPageOpen(true); scrollToTop(); };
  const openEnt = () => { setIsEntPageOpen(true); scrollToTop(); };
  const openGov = () => { setIsGovPageOpen(true); scrollToTop(); };
  const openInv = () => { setIsInvPageOpen(true); scrollToTop(); };
  const openArch = () => { setIsArchPageOpen(true); scrollToTop(); };
  const openGlobalInfra = () => { setIsGlobalInfraPageOpen(true); scrollToTop(); };
  const openDevOps = () => { setIsDevOpsPageOpen(true); scrollToTop(); };
  const openDigitalExp = () => { setIsDigitalExpPageOpen(true); scrollToTop(); };
  const openRegulatory = () => { setIsRegulatoryPageOpen(true); scrollToTop(); };
  const openCybersecurity = () => { setIsCybersecurityPageOpen(true); scrollToTop(); };
  const openIntroduction = () => { setIsIntroductionPageOpen(true); scrollToTop(); };
  const openCopyright = () => { setIsCopyrightPageOpen(true); scrollToTop(); window.location.hash = '#copyright-page'; };

  const openSoftwareProduct = () => { setIsSoftwareProductPageOpen(true); scrollToTop(); };
  const openAboutUs = () => { setIsAboutUsPageOpen(true); scrollToTop(); };

  const closePageAndScrollTo = (sectionId) => {
    setIsSdpePageOpen(false);
    setIsIpPageOpen(false);
    setIsSpcPageOpen(false);
    setIsPdlPageOpen(false);
    setIsOpePageOpen(false);
    setIsOtPageOpen(false);
    setIsAiPageOpen(false);
    setIsCloudPageOpen(false);
    setIsDaPageOpen(false);
    setIsApisPageOpen(false);
    setIsEduPageOpen(false);
    setIsEntPageOpen(false);
    setIsGovPageOpen(false);
    setIsInvPageOpen(false);
    setIsArchPageOpen(false);
    setIsGlobalInfraPageOpen(false);
    setIsDevOpsPageOpen(false);
    setIsDigitalExpPageOpen(false);
    setIsRegulatoryPageOpen(false);
    setIsSoftwareProductPageOpen(false);
    setIsAboutUsPageOpen(false);
    setIsGalleryPageOpen(false);
    setIsFollowPageOpen(false);
    setIsCareerPageOpen(false);
    setIsCybersecurityPageOpen(false);
    setIsCopyrightPageOpen(false);
    setIsSkillDevPageOpen(false);
    setIsIntroductionPageOpen(false);
    setIsSoftwareLibraryPageOpen(false);

    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${sectionId}`);

    requestAnimationFrame(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'instant' });
      }
    });
  };

  const handleCloseSdpePage = () => closePageAndScrollTo('products-platforms');
  const handleCloseIpPage = () => closePageAndScrollTo('intellectual-property');
  const handleCloseSpcPage = () => closePageAndScrollTo('software-commercialisation-section');
  const handleClosePdlPage = () => closePageAndScrollTo('product-development-lifecycle');
  const handleCloseOpePage = () => closePageAndScrollTo('our-product-ecosystem');
  const handleCloseOtPage = () => closePageAndScrollTo('our-technology');
  const handleCloseAiPage = () => closePageAndScrollTo('artificial-intelligence-intelligent-software');
  const handleCloseCloudPage = () => closePageAndScrollTo('cloud-saas-digital-platforms');
  const handleCloseDaPage = () => closePageAndScrollTo('data-analytics-intelligence-technology');
  const handleCloseApisPage = () => closePageAndScrollTo('apis-integration-digital-connectivity');
  const handleCloseEduPage = () => closePageAndScrollTo('education-training-skill-development-technology');
  const handleCloseEntPage = () => closePageAndScrollTo('enterprise-business-software-products');
  const handleCloseGovPage = () => closePageAndScrollTo('government-public-technology');
  const handleCloseInvPage = () => closePageAndScrollTo('investigation-legal-institutional-technology');
  const handleCloseArchPage = () => closePageAndScrollTo('software-architecture-product-engineering');
  const handleCloseGlobalInfraPage = () => closePageAndScrollTo('global-infrastructure-managed-services');
  const handleCloseDevOpsPage = () => closePageAndScrollTo('devops-continuous-delivery');
  const handleCloseDigitalExpPage = () => closePageAndScrollTo('digital-experience-design');
  const handleCloseRegulatoryPage = () => closePageAndScrollTo('regulatory-compliance-governance');
  const handleCloseSoftwareProductPage = () => closePageAndScrollTo('home');
  const handleCloseAboutUsPage = () => closePageAndScrollTo('home');
  const handleCloseGalleryPage = () => closePageAndScrollTo('home');
  const handleCloseFollowPage = () => closePageAndScrollTo('home');
  const handleCloseCareerPage = () => closePageAndScrollTo('home');
  const handleCloseCybersecurityPage = () => closePageAndScrollTo('cybersecurity-digital-security');
  const handleCloseCopyrightPage = () => { window.location.hash = '#about-us'; };
  const openMeaning = () => { setIsMeaningPageOpen(true); scrollToTop(); window.location.hash = '#meaning-behind-our-name-page'; };
  const handleCloseMeaningPage = () => { window.location.hash = '#about-us'; };
  const openSkillDev = () => { setIsSkillDevPageOpen(true); scrollToTop(); window.location.hash = '#skill-development-page'; };
  const handleCloseSkillDevPage = () => closePageAndScrollTo('home');
  const handleCloseIntroductionPage = () => closePageAndScrollTo('introduction');
  const handleCloseSoftwareLibraryPage = () => closePageAndScrollTo('home');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <ScrollToTop routeKey={activePageKey} />
      {isInitialLoading && <PageLoader message="Initializing Platform..." />}
      <Header />
      <main className="min-h-screen">
        <div className={isAnyDetailPageOpen ? 'hidden' : 'block'}>
          <Home
            onOpenSdpePage={openSdpe}
            onOpenIpPage={openIp}
            onOpenSpcPage={openSpc}
            onOpenPdlPage={openPdl}
            onOpenOpePage={openOpe}
            onOpenOtPage={openOt}
            onOpenAiPage={openAi}
            onOpenCloudPage={openCloud}
            onOpenDataAnalyticsPage={openDa}
            onOpenApisPage={openApis}
            onOpenEduPage={openEdu}
            onOpenEntPage={openEnt}
            onOpenGovPage={openGov}
            onOpenInvPage={openInv}
            onOpenArchPage={openArch}
            onOpenGlobalInfraPage={openGlobalInfra}
            onOpenDevOpsPage={openDevOps}
            onOpenDigitalExpPage={openDigitalExp}
            onOpenRegulatoryPage={openRegulatory}
            onOpenCybersecurityPage={openCybersecurity}
            onOpenIntroductionPage={openIntroduction}
          />
        </div>

        <Suspense fallback={<PageLoader message="Loading Solution..." />}>
          {isSdpePageOpen && <SoftwareDevelopmentProductEngineeringPage onClose={handleCloseSdpePage} />}
          {isIpPageOpen && <IntellectualPropertyPage onClose={handleCloseIpPage} />}
          {isSpcPageOpen && <SoftwareProductCommercialisationPage onClose={handleCloseSpcPage} />}
          {isPdlPageOpen && <ProductDevelopmentLifecyclePage onClose={handleClosePdlPage} />}
          {isOpePageOpen && <OurProductEcosystemPage onClose={handleCloseOpePage} />}
          {isOtPageOpen && <OurTechnologyPage onClose={handleCloseOtPage} />}
          {isAiPageOpen && <ArtificialIntelligenceIntelligentSoftwarePage onClose={handleCloseAiPage} />}
          {isCloudPageOpen && <CloudSaasAndDigitalPlatformsPage onClose={handleCloseCloudPage} />}
          {isDaPageOpen && <DataAnalyticsAndIntelligenceTechnologyPage onClose={handleCloseDaPage} />}
          {isApisPageOpen && <ApisIntegrationDigitalConnectivityPage onClose={handleCloseApisPage} />}
          {isEduPageOpen && <EducationTrainingSkillDevelopmentTechnologyPage onClose={handleCloseEduPage} />}
          {isEntPageOpen && <EnterpriseBusinessSoftwareProductsPage onClose={handleCloseEntPage} />}
          {isGovPageOpen && <GovernmentPublicTechnologyPage onClose={handleCloseGovPage} />}
          {isInvPageOpen && <InvestigationLegalInstitutionalTechnologyPage onClose={handleCloseInvPage} />}
          {isArchPageOpen && <SoftwareArchitectureProductEngineeringPage onClose={handleCloseArchPage} />}
          {isGlobalInfraPageOpen && <GlobalInfrastructureManagedServicesPage onClose={handleCloseGlobalInfraPage} />}
          {isDevOpsPageOpen && <DevOpsContinuousDeliveryPage onClose={handleCloseDevOpsPage} />}
          {isDigitalExpPageOpen && <DigitalExperienceDesignPage onClose={handleCloseDigitalExpPage} />}
          {isRegulatoryPageOpen && <RegulatoryComplianceGovernancePage onClose={handleCloseRegulatoryPage} />}
          {isSoftwareProductPageOpen && <SoftwareProductPage onClose={handleCloseSoftwareProductPage} />}
          {isAboutUsPageOpen && <AboutUsPage onClose={handleCloseAboutUsPage} onOpenCopyrightPage={openCopyright} onOpenMeaningPage={openMeaning} />}
          {isGalleryPageOpen && <GalleryPage onClose={handleCloseGalleryPage} />}
          {isFollowPageOpen && <FollowPage onClose={handleCloseFollowPage} />}
          {isCareerPageOpen && <CareerPage onClose={handleCloseCareerPage} />}
          {isCybersecurityPageOpen && <CybersecurityDigitalSecurityPage onClose={handleCloseCybersecurityPage} />}
          {isCopyrightPageOpen && <CopyRightPage onClose={handleCloseCopyrightPage} />}
          {isMeaningPageOpen && <MeaningBehindOurNamePage onClose={handleCloseMeaningPage} />}
          {isSkillDevPageOpen && <SkillDevelopmentPage onClose={handleCloseSkillDevPage} />}
          {isIntroductionPageOpen && <IntroductionPage onClose={handleCloseIntroductionPage} />}
          {isSoftwareLibraryPageOpen && <SoftwareLibraryPage onClose={handleCloseSoftwareLibraryPage} />}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
