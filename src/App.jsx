import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Home, { HOMEPAGE_SECTION_IDS } from './pages/HomePage/Home';
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
const AiInnovationResearchAdvancedIntelligenceAutomationPage = lazy(() => import('./pages/HomePage/AiInnovationResearchAdvancedIntelligenceAutomationPage/AiInnovationResearchAdvancedIntelligenceAutomationPage'));
const IotSmartEdgeSystemsPage = lazy(() => import('./pages/HomePage/IotSmartEdgeSystemsPage/IotSmartEdgeSystemsPage'));
const NextGenerationDigitalInnovationDecentralisedIntelligencePage = lazy(() => import('./pages/HomePage/NextGenerationDigitalInnovationDecentralisedIntelligencePage/NextGenerationDigitalInnovationDecentralisedIntelligencePage'));
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
const ITServicesPage = lazy(() => import('./pages/IT Services/ITServicesPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUs/ContactUsPage'));
const ComingSoonPage = lazy(() => import('./components/ComingSoonPage'));

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
  const [isAiInnovationPageOpen, setIsAiInnovationPageOpen] = useState(false);
  const [isIotPageOpen, setIsIotPageOpen] = useState(false);
  const [isNextGenPageOpen, setIsNextGenPageOpen] = useState(false);
  const [isItServicesPageOpen, setIsItServicesPageOpen] = useState(false);
  const [isContactUsPageOpen, setIsContactUsPageOpen] = useState(false);
  const [isComingSoonPageOpen, setIsComingSoonPageOpen] = useState(false);
  const [comingSoonTitle, setComingSoonTitle] = useState('Coming Soon');

  // Initial fast platform loading transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const activePageKey = isComingSoonPageOpen
    ? 'coming-soon'
    : isSdpePageOpen
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
                                                        : isAiInnovationPageOpen
                                                          ? 'ai-innovation'
                                                        : isIotPageOpen
                                                          ? 'iot'
                                                        : isNextGenPageOpen
                                                          ? 'nextgen'
                                                        : isIntroductionPageOpen
                                                          ? 'introduction-page'
                                                        : isSoftwareLibraryPageOpen
                                                         ? 'software-library'
                                                         : isSkillDevPageOpen
                                                           ? 'skill-development'
                                                         : isItServicesPageOpen
                                                           ? 'it-services'
                                                         : isContactUsPageOpen
                                                           ? 'contact'
                                                           : isCopyrightPageOpen
                                                             ? 'copyright'
                                                             : isMeaningPageOpen
                                                               ? 'meaning-behind-our-name'
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
    isSoftwareLibraryPageOpen ||
    isAiInnovationPageOpen ||
    isIotPageOpen ||
    isNextGenPageOpen ||
    isItServicesPageOpen ||
    isContactUsPageOpen ||
    isComingSoonPageOpen;

    const lastHomepageScrollRef = useRef(0);

  const saveHomepageScrollBeforeDetail = () => {
    if (!isAnyDetailPageOpen) {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      lastHomepageScrollRef.current = scrollY;
      const currentHash = window.location.hash || '#home';
      window.history.replaceState({ scrollY, sectionId: currentHash.replace('#', '') }, '');
    }
  };

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
    setIsAiInnovationPageOpen(false);
    setIsIotPageOpen(false);
    setIsNextGenPageOpen(false);
    setIsItServicesPageOpen(false);
    setIsContactUsPageOpen(false);
    setIsComingSoonPageOpen(false);
  };

  useEffect(() => {
    const handleHash = () => {
      const rawHash = (window.location.hash || '').toLowerCase().trim();

      const isHomepageHash =
        rawHash === '' ||
        rawHash === '#' ||
        rawHash === '#home' ||
        rawHash === '#/home' ||
        rawHash === '#featured-technology' ||
        HOMEPAGE_SECTION_IDS.includes(rawHash.replace(/^#\/?/, '')) ||
        ['sdpe', 'software-development-product-engineering', 'ai-innovation', 'iot', 'nextgen', 'cybersecurity'].includes(rawHash.replace(/^#\/?/, ''));

      if (!isHomepageHash) {
        saveHomepageScrollBeforeDetail();
      }

      // 1. Standalone pages
      if (
        rawHash === '#it-services' ||
        rawHash === '#/it-services' ||
        rawHash === '#it-services-page' ||
        rawHash === '#/it-services-page' ||
        rawHash === '#itservices' ||
        rawHash === '#/itservices' ||
        rawHash.startsWith('#it-services')
      ) {
        resetAll();
        setIsItServicesPageOpen(true);
        return;
      }

      if (
        rawHash === '#contact' ||
        rawHash === '#/contact' ||
        rawHash === '#contact-us' ||
        rawHash === '#/contact-us' ||
        rawHash === '#contact-us-page' ||
        rawHash === '#/contact-us-page' ||
        rawHash === '#contactus' ||
        rawHash.startsWith('#contact')
      ) {
        resetAll();
        setIsContactUsPageOpen(true);
        return;
      }

      // Coming Soon and redirects
      const isComingSoonHash =
        rawHash === '#coming-soon' ||
        rawHash === '#/coming-soon' ||
        rawHash === '#comingsoon' ||
        rawHash.startsWith('#coming-soon') ||
        rawHash.startsWith('#/coming-soon') ||
        rawHash === '#help' ||
        rawHash === '#/help' ||
        rawHash === '#tender' ||
        rawHash === '#/tender' ||
        rawHash === '#published-software' ||
        rawHash === '#/published-software' ||
        rawHash === '#software-launches' ||
        rawHash === '#/software-launches' ||
        rawHash === '#upcoming-software' ||
        rawHash === '#/upcoming-software' ||
        rawHash.startsWith('#/advertisement') ||
        rawHash.startsWith('#advertisement') ||
        rawHash.startsWith('#/press') ||
        rawHash.startsWith('#press') ||
        rawHash.startsWith('#/notices') ||
        rawHash.startsWith('#notices') ||
        rawHash.startsWith('#/status') ||
        rawHash.startsWith('#status') ||
        rawHash.startsWith('#/application-status') ||
        rawHash.startsWith('#application-status') ||
        rawHash.startsWith('#/check-status') ||
        rawHash.startsWith('#check-status') ||
        rawHash.startsWith('#/resume') ||
        rawHash.startsWith('#resume') ||
        rawHash.startsWith('#/submit-resume') ||
        rawHash.startsWith('#submit-resume') ||
        rawHash.startsWith('#/internship') ||
        rawHash.startsWith('#internship') ||
        rawHash.startsWith('#/intern') ||
        rawHash.startsWith('#intern') ||
        rawHash.startsWith('#/post-vacancy') ||
        rawHash.startsWith('#post-vacancy') ||
        rawHash.startsWith('#/post') ||
        rawHash.startsWith('#post') ||
        rawHash.startsWith('#/vacancy-card-1') ||
        rawHash.startsWith('#vacancy-card-1') ||
        rawHash.startsWith('#/vacancy-card-2') ||
        rawHash.startsWith('#vacancy-card-2');

      if (isComingSoonHash) {
        let title = 'Coming Soon';
        if (rawHash.includes('help')) title = 'Help & Support';
        else if (rawHash.includes('tender')) title = 'Tender Notices';
        else if (rawHash.includes('published-software')) title = 'Published Software';
        else if (rawHash.includes('software-launches')) title = 'Software Launches';
        else if (rawHash.includes('upcoming-software')) title = 'Upcoming Software';
        else if (rawHash.includes('advertisement')) title = 'Recruitment Advertisement';
        else if (rawHash.includes('press') || rawHash.includes('notices')) title = 'Press Releases and Notices';
        else if (rawHash.includes('status')) title = 'Check Application Status';
        else if (rawHash.includes('resume')) title = 'Submit Resume';
        else if (rawHash.includes('internship') || rawHash.includes('intern')) title = 'Internship';
        else if (rawHash.includes('post-vacancy') || rawHash === '#/post' || rawHash === '#post') title = 'Post Vacancy';
        else if (rawHash.includes('vacancy-card-1')) title = 'Vacancy Card 1';
        else if (rawHash.includes('vacancy-card-2')) title = 'Vacancy Card 2';

        resetAll();
        setComingSoonTitle(title);
        setIsComingSoonPageOpen(true);
        return;
      }

      let cleanSoftwareHash = '';
      try {
        cleanSoftwareHash = decodeURIComponent(rawHash || '').toLowerCase().replace(/^#\/?/, '').replace(/\/$/, '').replace(/\s+/g, '-').trim();
      } catch {
        cleanSoftwareHash = (rawHash || '').toLowerCase().replace(/^#\/?/, '').replace(/\/$/, '').replace(/\s+/g, '-').trim();
      }
      const softwareProductSlugs = [
        'software-products',
        'software-products-page',
        'software-product-page',
        'product-introduction',
        'purpose-use-cases',
        'vision-mission',
        'product-roadmap',
        'technology-architecture',
        'security-compliance',
        'integrations-apis',
        'product-benefits-impact',
      ];

      if (softwareProductSlugs.includes(cleanSoftwareHash)) {
        resetAll();
        setIsSoftwareProductPageOpen(true);
        return;
      }

      if (rawHash === '#about-us' || rawHash === '#about-us-page' || rawHash === '#about') {
        resetAll();
        setIsAboutUsPageOpen(true);
        return;
      }

      if (rawHash === '#gallery' || rawHash === '#gallery-page') {
        resetAll();
        setIsGalleryPageOpen(true);
        return;
      }

      if (rawHash === '#follow' || rawHash === '#follow-page' || rawHash === '#follow-us') {
        resetAll();
        setIsFollowPageOpen(true);
        return;
      }

      if (
        rawHash === '#careers' ||
        rawHash === '#career' ||
        rawHash === '#careers-page' ||
        rawHash === '#career-page' ||
        rawHash.startsWith('#/vacancies') ||
        rawHash.startsWith('#/current-vacancies') ||
        rawHash.startsWith('#/job-vacancy') ||
        rawHash.startsWith('#/job-detail-preview') ||
        rawHash.startsWith('#/job-preview') ||
        rawHash.startsWith('#/full-time') ||
        rawHash.startsWith('#/part-time') ||
        rawHash.startsWith('#/remote-job') ||
        rawHash.startsWith('#/policies') ||
        rawHash.startsWith('#/recruitment-policies') ||
        rawHash.startsWith('#/rules') ||
        rawHash.startsWith('#/verification') ||
        rawHash.startsWith('#/document-verification') ||
        rawHash.startsWith('#/department') ||
        rawHash.startsWith('#/portal') ||
        rawHash.startsWith('#/online-portal') ||
        rawHash.startsWith('#/online-application-portal')
      ) {
        resetAll();
        setIsCareerPageOpen(true);
        return;
      }

      if (
        rawHash === '#copyright-page' ||
        rawHash === '#copyright' ||
        rawHash === '#copyright-policy' ||
        rawHash === '#about-us-copyright'
      ) {
        resetAll();
        setIsCopyrightPageOpen(true);
        return;
      }

      if (
        rawHash === '#meaning-behind-our-name-page' ||
        rawHash === '#meaning-behind-our-name' ||
        rawHash === '#meaning-page' ||
        rawHash === '#meaning-behind-our-name-card'
      ) {
        resetAll();
        setIsMeaningPageOpen(true);
        return;
      }

      if (
        rawHash === '#skill-development-page' ||
        rawHash === '#skill-development' ||
        rawHash === '#skill-dev' ||
        rawHash === '#skill-dev-page'
      ) {
        resetAll();
        setIsSkillDevPageOpen(true);
        return;
      }

      if (
        rawHash === '#software-library-page' ||
        rawHash === '#software-library' ||
        rawHash === '#software-library-section'
      ) {
        resetAll();
        setIsSoftwareLibraryPageOpen(true);
        return;
      }

      // 2. Section Detail Pages (Unique dedicated pages with zero section collision)
      if (rawHash === '#sdpe-page') {
        resetAll();
        setIsSdpePageOpen(true);
        return;
      }
      if (rawHash === '#ip-page') {
        resetAll();
        setIsIpPageOpen(true);
        return;
      }
      if (rawHash === '#spc-page') {
        resetAll();
        setIsSpcPageOpen(true);
        return;
      }
      if (rawHash === '#pdl-page' || rawHash === '#product-development-lifecycle-page') {
        resetAll();
        setIsPdlPageOpen(true);
        return;
      }
      if (rawHash === '#our-product-ecosystem-page' || rawHash === '#ope-page') {
        resetAll();
        setIsOpePageOpen(true);
        return;
      }
      if (rawHash === '#our-technology-page' || rawHash === '#ot-page') {
        resetAll();
        setIsOtPageOpen(true);
        return;
      }
      if (rawHash === '#artificial-intelligence-intelligent-software-page' || rawHash === '#ai-page') {
        resetAll();
        setIsAiPageOpen(true);
        return;
      }
      if (rawHash === '#cloud-saas-digital-platforms-page' || rawHash === '#cloud-saas-page') {
        resetAll();
        setIsCloudPageOpen(true);
        return;
      }
      if (rawHash === '#data-analytics-intelligence-technology-page' || rawHash === '#da-page') {
        resetAll();
        setIsDaPageOpen(true);
        return;
      }
      if (rawHash === '#apis-integration-page' || rawHash === '#apis-integration-digital-connectivity-page') {
        resetAll();
        setIsApisPageOpen(true);
        return;
      }
      if (rawHash === '#education-training-page' || rawHash === '#education-training-skill-development-technology-page') {
        resetAll();
        setIsEduPageOpen(true);
        return;
      }
      if (rawHash === '#enterprise-business-page' || rawHash === '#enterprise-business-software-products-page') {
        resetAll();
        setIsEntPageOpen(true);
        return;
      }
      if (rawHash === '#government-public-page' || rawHash === '#government-public-technology-page') {
        resetAll();
        setIsGovPageOpen(true);
        return;
      }
      if (rawHash === '#investigation-legal-page' || rawHash === '#investigation-legal-institutional-technology-page') {
        resetAll();
        setIsInvPageOpen(true);
        return;
      }
      if (rawHash === '#software-architecture-page' || rawHash === '#software-architecture-product-engineering-page') {
        resetAll();
        setIsArchPageOpen(true);
        return;
      }
      if (rawHash === '#global-infrastructure-page' || rawHash === '#global-infrastructure-managed-services-page') {
        resetAll();
        setIsGlobalInfraPageOpen(true);
        return;
      }
      if (rawHash === '#devops-page' || rawHash === '#devops-continuous-delivery-page') {
        resetAll();
        setIsDevOpsPageOpen(true);
        return;
      }
      if (rawHash === '#digital-experience-page' || rawHash === '#digital-experience-design-page') {
        resetAll();
        setIsDigitalExpPageOpen(true);
        return;
      }
      if (rawHash === '#regulatory-compliance-page' || rawHash === '#regulatory-compliance-governance-page') {
        resetAll();
        setIsRegulatoryPageOpen(true);
        return;
      }
      if (rawHash === '#ai-innovation-page' || rawHash === '#ai-innovation-research-advanced-intelligence-automation-page') {
        resetAll();
        setIsAiInnovationPageOpen(true);
        return;
      }
      if (rawHash === '#iot-page' || rawHash === '#iot-smart-edge-systems-page') {
        resetAll();
        setIsIotPageOpen(true);
        return;
      }
      if (
        rawHash === '#nextgen-page' ||
        rawHash === '#next-generation-digital-innovation-decentralised-intelligence-page' ||
        rawHash === '#blockchain-page'
      ) {
        resetAll();
        setIsNextGenPageOpen(true);
        return;
      }
      const normalizedCyberHash = rawHash.replace(/%20/g, '-').replace(/\s+/g, '-');
      if (
        normalizedCyberHash === '#cybersecurity-digital-security-page' ||
        normalizedCyberHash === '#cybersecurity-page' ||
        normalizedCyberHash === '#cybersecurity' ||
        rawHash === '#cybersecurity-digital-security-page' ||
        rawHash === '#cybersecurity-page'
      ) {
        resetAll();
        setIsCybersecurityPageOpen(true);
        return;
      }
      if (rawHash === '#introduction-page') {
        resetAll();
        setIsIntroductionPageOpen(true);
        return;
      }

      // 3. Homepage and Section scrolling
      window.__IBCS_NAV_LOCK = Date.now() + 1000;
      resetAll();

      if (
        rawHash === '' ||
        rawHash === '#' ||
        rawHash === '#home' ||
        rawHash === '#/home' ||
        rawHash === '#featured-technology'
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }

      let cleanId = rawHash.replace(/^#\/?/, '');
      if (cleanId === 'sdpe' || cleanId === 'software-development-product-engineering') {
        cleanId = 'products-platforms';
      } else if (cleanId === 'ai-innovation') {
        cleanId = 'ai-innovation-research-advanced-intelligence-automation';
      } else if (cleanId === 'iot') {
        cleanId = 'iot-smart-edge-systems';
      } else if (cleanId === 'nextgen') {
        cleanId = 'next-generation-digital-innovation-decentralised-intelligence';
      } else if (cleanId === 'cybersecurity') {
        cleanId = 'cybersecurity-digital-security';
      }

      setTimeout(() => {
        const targetElement = document.getElementById(cleanId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Graceful fallback for unrecognized hashes: keep clean #home
          window.history.replaceState({ scrollY: 0, sectionId: 'home' }, '', `${window.location.pathname}${window.location.search}#home`);
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }, 50);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
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
  }, [isAnyDetailPageOpen, isSdpePageOpen, isIpPageOpen, isSpcPageOpen, isPdlPageOpen, isOpePageOpen, isOtPageOpen, isAiPageOpen, isCloudPageOpen, isDaPageOpen, isApisPageOpen, isEduPageOpen, isEntPageOpen, isGovPageOpen, isInvPageOpen, isArchPageOpen, isGlobalInfraPageOpen, isDevOpsPageOpen, isDigitalExpPageOpen, isRegulatoryPageOpen, isSoftwareProductPageOpen, isAboutUsPageOpen, isGalleryPageOpen, isFollowPageOpen, isCareerPageOpen, isCybersecurityPageOpen, isCopyrightPageOpen, isSkillDevPageOpen, isIntroductionPageOpen, isSoftwareLibraryPageOpen, isAiInnovationPageOpen, isIotPageOpen, isNextGenPageOpen, isItServicesPageOpen, isContactUsPageOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const openSdpe = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsSdpePageOpen(true); scrollToTop(); if (window.location.hash !== '#sdpe-page') window.location.hash = '#sdpe-page'; };
  const openIp = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsIpPageOpen(true); scrollToTop(); if (window.location.hash !== '#ip-page') window.location.hash = '#ip-page'; };
  const openSpc = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsSpcPageOpen(true); scrollToTop(); if (window.location.hash !== '#spc-page') window.location.hash = '#spc-page'; };
  const openPdl = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsPdlPageOpen(true); scrollToTop(); if (window.location.hash !== '#pdl-page') window.location.hash = '#pdl-page'; };
  const openOpe = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsOpePageOpen(true); scrollToTop(); if (window.location.hash !== '#our-product-ecosystem-page') window.location.hash = '#our-product-ecosystem-page'; };
  const openOt = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsOtPageOpen(true); scrollToTop(); if (window.location.hash !== '#our-technology-page') window.location.hash = '#our-technology-page'; };
  const openAi = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsAiPageOpen(true); scrollToTop(); if (window.location.hash !== '#artificial-intelligence-intelligent-software-page') window.location.hash = '#artificial-intelligence-intelligent-software-page'; };
  const openCloud = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsCloudPageOpen(true); scrollToTop(); if (window.location.hash !== '#cloud-saas-digital-platforms-page') window.location.hash = '#cloud-saas-digital-platforms-page'; };
  const openDa = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsDaPageOpen(true); scrollToTop(); if (window.location.hash !== '#data-analytics-intelligence-technology-page') window.location.hash = '#data-analytics-intelligence-technology-page'; };
  const openApis = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsApisPageOpen(true); scrollToTop(); if (window.location.hash !== '#apis-integration-digital-connectivity-page') window.location.hash = '#apis-integration-digital-connectivity-page'; };
  const openEdu = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsEduPageOpen(true); scrollToTop(); if (window.location.hash !== '#education-training-page') window.location.hash = '#education-training-page'; };
  const openEnt = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsEntPageOpen(true); scrollToTop(); if (window.location.hash !== '#enterprise-business-page') window.location.hash = '#enterprise-business-page'; };
  const openGov = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsGovPageOpen(true); scrollToTop(); if (window.location.hash !== '#government-public-page') window.location.hash = '#government-public-page'; };
  const openInv = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsInvPageOpen(true); scrollToTop(); if (window.location.hash !== '#investigation-legal-page') window.location.hash = '#investigation-legal-page'; };
  const openArch = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsArchPageOpen(true); scrollToTop(); if (window.location.hash !== '#software-architecture-page') window.location.hash = '#software-architecture-page'; };
  const openGlobalInfra = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsGlobalInfraPageOpen(true); scrollToTop(); if (window.location.hash !== '#global-infrastructure-managed-services-page') window.location.hash = '#global-infrastructure-managed-services-page'; };
  const openDevOps = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsDevOpsPageOpen(true); scrollToTop(); if (window.location.hash !== '#devops-continuous-delivery-page') window.location.hash = '#devops-continuous-delivery-page'; };
  const openDigitalExp = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsDigitalExpPageOpen(true); scrollToTop(); if (window.location.hash !== '#digital-experience-design-page') window.location.hash = '#digital-experience-design-page'; };
  const openRegulatory = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsRegulatoryPageOpen(true); scrollToTop(); if (window.location.hash !== '#regulatory-compliance-governance-page') window.location.hash = '#regulatory-compliance-governance-page'; };
  const openAiInnovation = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsAiInnovationPageOpen(true); scrollToTop(); if (window.location.hash !== '#ai-innovation-page') window.location.hash = '#ai-innovation-page'; };
  const openIot = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsIotPageOpen(true); scrollToTop(); if (window.location.hash !== '#iot-page') window.location.hash = '#iot-page'; };
  const openNextGen = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsNextGenPageOpen(true); scrollToTop(); if (window.location.hash !== '#nextgen-page') window.location.hash = '#nextgen-page'; };
  const openCybersecurity = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsCybersecurityPageOpen(true); scrollToTop(); if (window.location.hash !== '#cybersecurity-digital-security-page') window.location.hash = '#cybersecurity-digital-security-page'; };
  const openIntroduction = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsIntroductionPageOpen(true); scrollToTop(); if (window.location.hash !== '#introduction-page') window.location.hash = '#introduction-page'; };
  const openCopyright = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsCopyrightPageOpen(true); scrollToTop(); if (window.location.hash !== '#copyright-page') window.location.hash = '#copyright-page'; };
  const openMeaning = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsMeaningPageOpen(true); scrollToTop(); if (window.location.hash !== '#meaning-behind-our-name-page') window.location.hash = '#meaning-behind-our-name-page'; };
  const openSkillDev = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsSkillDevPageOpen(true); scrollToTop(); if (window.location.hash !== '#skill-development-page') window.location.hash = '#skill-development-page'; };
  const openSoftwareProduct = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsSoftwareProductPageOpen(true); scrollToTop(); if (window.location.hash !== '#software-products') window.location.hash = '#software-products'; };
  const openAboutUs = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsAboutUsPageOpen(true); scrollToTop(); if (window.location.hash !== '#about-us') window.location.hash = '#about-us'; };
  const openGallery = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsGalleryPageOpen(true); scrollToTop(); if (window.location.hash !== '#gallery') window.location.hash = '#gallery'; };
  const openFollow = () => { saveHomepageScrollBeforeDetail(); resetAll(); setIsFollowPageOpen(true); scrollToTop(); if (window.location.hash !== '#follow') window.location.hash = '#follow'; };

  const closePageAndScrollTo = (sectionId) => {
    window.__IBCS_NAV_LOCK = Date.now() + 1000;
    resetAll();
    const target = sectionId || 'home';
    if (window.location.hash === '#' + target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.location.hash = '#' + target;
    }
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
  const handleCloseCopyrightPage = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#about-us';
    }
  };
  const handleCloseMeaningPage = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#about-us';
    }
  };
  const handleCloseSkillDevPage = () => closePageAndScrollTo('home');
  const handleCloseIntroductionPage = () => closePageAndScrollTo('introduction');
  const handleCloseSoftwareLibraryPage = () => closePageAndScrollTo('home');
  const handleCloseAiInnovationPage = () => closePageAndScrollTo('ai-innovation-research-advanced-intelligence-automation');
  const handleCloseIotPage = () => closePageAndScrollTo('iot-smart-edge-systems');
  const handleCloseNextGenPage = () => closePageAndScrollTo('next-generation-digital-innovation-decentralised-intelligence');
  const openItServices = () => {
    resetAll();
    setIsItServicesPageOpen(true);
    scrollToTop();
    if (window.location.hash !== '#it-services') {
      window.location.hash = '#it-services';
    }
  };

  const handleCloseItServicesPage = () => closePageAndScrollTo('home');

  const openContactUs = () => {
    resetAll();
    setIsContactUsPageOpen(true);
    scrollToTop();
    if (window.location.hash !== '#contact') {
      window.location.hash = '#contact';
    }
  };

  const handleCloseContactUsPage = () => closePageAndScrollTo('home');
  const handleCloseComingSoonPage = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      closePageAndScrollTo('home');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 overflow-x-clip w-full max-w-full">
      <ScrollToTop routeKey={activePageKey} />
      {isInitialLoading && <PageLoader message="Initializing Platform..." />}
      <Header onOpenItServicesPage={openItServices} onOpenContactUsPage={openContactUs} activePage={activePageKey} />
      <main className={isAnyDetailPageOpen ? 'w-full' : 'min-h-screen'}>
        <div className={isAnyDetailPageOpen ? 'hidden' : 'block'}>
          <Home
            isActive={!isAnyDetailPageOpen}
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
            onOpenAiInnovationPage={openAiInnovation}
            onOpenIotPage={openIot}
            onOpenNextGenPage={openNextGen}
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
          {isAiInnovationPageOpen && <AiInnovationResearchAdvancedIntelligenceAutomationPage onClose={handleCloseAiInnovationPage} />}
          {isIotPageOpen && <IotSmartEdgeSystemsPage onClose={handleCloseIotPage} />}
          {isNextGenPageOpen && <NextGenerationDigitalInnovationDecentralisedIntelligencePage onClose={handleCloseNextGenPage} />}
          {isItServicesPageOpen && <ITServicesPage onClose={handleCloseItServicesPage} />}
          {isContactUsPageOpen && <ContactUsPage onClose={handleCloseContactUsPage} />}
          {isComingSoonPageOpen && <ComingSoonPage title={comingSoonTitle} showNav onClose={handleCloseComingSoonPage} />}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
