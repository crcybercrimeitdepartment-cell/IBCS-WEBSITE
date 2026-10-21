import { useEffect } from 'react';
import HeroSection from './HeroSectionPage/HeroSection';

export const HOMEPAGE_SECTION_IDS = [
  'home',
  'introduction',
  'products-platforms',
  'our-technology',
  'our-product-ecosystem',
  'cybersecurity-digital-security',
  'artificial-intelligence-intelligent-software',
  'cloud-saas-digital-platforms',
  'data-analytics-intelligence-technology',
  'software-architecture-product-engineering',
  'product-development-lifecycle',
  'apis-integration-digital-connectivity',
  'enterprise-business-software-products',
  'government-public-technology',
  'investigation-legal-institutional-technology',
  'education-training-skill-development-technology',
  'intellectual-property',
  'software-commercialisation-section',
  'global-infrastructure-managed-services',
  'devops-continuous-delivery',
  'digital-experience-design',
  'regulatory-compliance-governance',
  'ai-innovation-research-advanced-intelligence-automation',
  'iot-smart-edge-systems',
  'next-generation-digital-innovation-decentralised-intelligence',
];

// 0. Introduction
import IntroductionSection from './IntroductionPage/IntroductionSection';

// 1. Software Development & Product Engineering
import SoftwareDevelopmentProductEngineeringSection from './SoftwareDevelopmentProductEngineeringPage/SoftwareDevelopmentProductEngineeringSection';
// 2. Our Technology
import OurTechnologySection from './OurTechnologyPage/OurTechnologySection';
// 3. Our Product Ecosystem
import OurProductEcosystemSection from './OurProductEcosystemPage/OurProductEcosystemSection';
// 4. Cybersecurity & Digital Security
import CybersecurityDigitalSecuritySection from './CybersecurityDigitalSecurityPage/CybersecurityDigitalSecuritySection';
// 5. Artificial Intelligence & Intelligent Software
import ArtificialIntelligenceIntelligentSoftwareSection from './ArtificialIntelligenceIntelligentSoftwarePage/ArtificialIntelligenceIntelligentSoftwareSection';
// 6. Cloud, SaaS & Digital Platforms
import CloudSaasDigitalPlatformsSection from './CloudSaasDigitalPlatformsPage/CloudSaasDigitalPlatformsSection';
// 7. Data, Analytics & Intelligence Technology
import DataAnalyticsIntelligenceTechnologySection from './DataAnalyticsIntelligenceTechnologyPage/DataAnalyticsIntelligenceTechnologySection';
// 8. Software Architecture & Product Engineering
import SoftwareArchitectureProductEngineeringSection from './SoftwareArchitectureProductEngineeringPage/SoftwareArchitectureProductEngineeringSection';
// 9. Product Development Lifecycle
import ProductDevelopmentLifecycleSection from './ProductDevelopmentLifecyclePage/ProductDevelopmentLifecycleSection';
// 10. APIs, Integration & Digital Connectivity
import ApisIntegrationDigitalConnectivitySection from './ApisIntegrationDigitalConnectivityPage/ApisIntegrationDigitalConnectivitySection';
// 11. Enterprise & Business Software Products
import EnterpriseBusinessSoftwareProductsSection from './EnterpriseBusinessSoftwareProductsPage/EnterpriseBusinessSoftwareProductsSection';
// 12. Government & Public Technology
import GovernmentPublicTechnologySection from './GovernmentPublicTechnologyPage/GovernmentPublicTechnologySection';
// 13. Investigation, Legal & Institutional Technology
import InvestigationLegalInstitutionalTechnologySection from './InvestigationLegalInstitutionalTechnologyPage/InvestigationLegalInstitutionalTechnologySection';
// 14. Education, Training & Skill Development Technology
import EducationTrainingSkillDevelopmentTechnologySection from './EducationTrainingSkillDevelopmentTechnologyPage/EducationTrainingSkillDevelopmentTechnologySection';
// 15. Intellectual Property & Technology
import IntellectualPropertySection from './IntellectualPropertyPage/IntellectualPropertySection';
// 16. Software Product Commercialisation
import SoftwareProductCommercialisationSection from './SoftwareProductCommercialisationPage/SoftwareProductCommercialisationSection';

// Demo Extra Sections (17 to 24)
// 17. Global Infrastructure & Managed Services
import GlobalInfrastructureManagedServicesSection from './GlobalInfrastructureManagedServicesPage/GlobalInfrastructureManagedServicesSection';
// 18. DevOps & Continuous Delivery
import DevOpsContinuousDeliverySection from './DevOpsContinuousDeliveryPage/DevOpsContinuousDeliverySection';
// 19. Digital Experience & UI/UX Design
import DigitalExperienceDesignSection from './DigitalExperienceDesignPage/DigitalExperienceDesignSection';
// 20. Regulatory Compliance & Risk Governance
import RegulatoryComplianceGovernanceSection from './RegulatoryComplianceGovernancePage/RegulatoryComplianceGovernanceSection';
// 21. AI Innovation, Research & Advanced Intelligence Automation
import AiInnovationResearchAdvancedIntelligenceAutomationSection from './AiInnovationResearchAdvancedIntelligenceAutomationPage/AiInnovationResearchAdvancedIntelligenceAutomationSection';
// 22. IoT, Smart Systems & Edge Computing
import IotSmartEdgeSystemsSection from './IotSmartEdgeSystemsPage/IotSmartEdgeSystemsSection';
// 23. Next-Generation Digital Innovation & Decentralised Intelligence
import NextGenerationDigitalInnovationDecentralisedIntelligenceSection from './NextGenerationDigitalInnovationDecentralisedIntelligencePage/NextGenerationDigitalInnovationDecentralisedIntelligenceSection';
import RevealSection from '../../components/common/RevealSection';


export default function Home({
  onOpenSdpePage,
  onOpenIpPage,
  onOpenSpcPage,
  onOpenPdlPage,
  onOpenOpePage,
  onOpenOtPage,
  onOpenAiPage,
  onOpenCloudPage,
  onOpenDataAnalyticsPage,
  onOpenArchPage,
  onOpenApisPage,
  onOpenEntPage,
  onOpenGovPage,
  onOpenInvPage,
  onOpenEduPage,
  onOpenGlobalInfraPage,
  onOpenDevOpsPage,
  onOpenDigitalExpPage,
  onOpenRegulatoryPage,
  onOpenCybersecurityPage,
  onOpenIntroductionPage,
  onOpenAiInnovationPage,
  onOpenIotPage,
  onOpenNextGenPage,
  isActive = true,
}) {
  useEffect(() => {
    let ticking = false;
    let isProgrammatic = false;
    let programmaticTimer = null;

    const handleHashChange = () => {
      // Pause scroll tracking temporarily when hash changes via user action/navigation
      isProgrammatic = true;
      if (programmaticTimer) clearTimeout(programmaticTimer);
      programmaticTimer = setTimeout(() => {
        isProgrammatic = false;
      }, 1000);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    const onScroll = () => {
      if (isProgrammatic || (window.__IBCS_NAV_LOCK && Date.now() < window.__IBCS_NAV_LOCK)) return;
      if (!isActive) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
          if (isProgrammatic || (window.__IBCS_NAV_LOCK && Date.now() < window.__IBCS_NAV_LOCK)) return;
          if (!isActive) return;

          const currentHash = (window.location.hash || '').toLowerCase();
          const isDetailPageHash =
            currentHash.endsWith('-page') ||
            [
              '#about-us',
              '#about',
              '#software-products',
              '#published-software',
              '#software-launches',
              '#upcoming-software',
              '#software-library',
              '#it-services',
              '#skill-development',
              '#careers',
              '#contact',
              '#gallery',
              '#follow',
              '#copyright',
              '#meaning',
              '#product-introduction',
              '#purpose-use-cases',
              '#vision-mission',
              '#product-roadmap',
              '#technology-architecture',
              '#security-compliance',
              '#integrations-apis',
              '#product-benefits-impact',
            ].some((p) => currentHash.startsWith(p));
          if (isDetailPageHash) return;

          const scrollY = window.scrollY || window.pageYOffset;
          if (scrollY < 120) {
            const current = (window.location.hash || '').replace('#', '');
            if (current !== 'home' && current !== '') {
              window.history.replaceState(
                { scrollY: 0, sectionId: 'home' },
                '',
                `${window.location.pathname}${window.location.search}#home`
              );
              window.dispatchEvent(new CustomEvent('sectionchange', { detail: { sectionId: 'home' } }));
            }
            return;
          }

          const triggerPoint = scrollY + window.innerHeight * 0.35;
          let currentSectionId = null;

          for (let i = HOMEPAGE_SECTION_IDS.length - 1; i >= 0; i--) {
            const id = HOMEPAGE_SECTION_IDS[i];
            const el = document.getElementById(id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();
            // Ignore elements with zero dimension (hidden or display: none)
            if (rect.height === 0 && rect.width === 0) continue;

            // Compute true absolute document Y coordinate, immune to offsetParent and CSS transforms
            const elementTop = rect.top + scrollY;
            if (elementTop <= triggerPoint) {
              currentSectionId = id;
              break;
            }
          }

          if (currentSectionId) {
            const current = (window.location.hash || '').replace('#', '');
            if (current !== currentSectionId) {
              window.history.replaceState(
                { scrollY, sectionId: currentSectionId },
                '',
                `${window.location.pathname}${window.location.search}#${currentSectionId}`
              );
              window.dispatchEvent(new CustomEvent('sectionchange', { detail: { sectionId: currentSectionId } }));
            }
          }
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      if (programmaticTimer) clearTimeout(programmaticTimer);
    };
  }, [isActive]);

  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      {/* 0. Introduction (Priority above-the-fold) */}
      <RevealSection priority>
        <IntroductionSection onOpenPage={onOpenIntroductionPage} />
      </RevealSection>

      {/* 1. Software Development & Product Engineering (Priority above-the-fold) */}
      <RevealSection priority>
        <SoftwareDevelopmentProductEngineeringSection onOpenPage={onOpenSdpePage} />
      </RevealSection>

      {/* 2. Our Technology */}
      <RevealSection>
        <OurTechnologySection onOpenPage={onOpenOtPage} />
      </RevealSection>

      {/* 3. Our Product Ecosystem */}
      <RevealSection>
        <OurProductEcosystemSection onOpenPage={onOpenOpePage} />
      </RevealSection>

      {/* 4. Cybersecurity & Digital Security */}
      <RevealSection>
        <CybersecurityDigitalSecuritySection onOpenPage={onOpenCybersecurityPage} />
      </RevealSection>

      {/* 5. Artificial Intelligence & Intelligent Software */}
      <RevealSection>
        <ArtificialIntelligenceIntelligentSoftwareSection onOpenPage={onOpenAiPage} />
      </RevealSection>

      {/* 6. Cloud, SaaS & Digital Platforms */}
      <RevealSection>
        <CloudSaasDigitalPlatformsSection onOpenPage={onOpenCloudPage} />
      </RevealSection>

      {/* 7. Data, Analytics & Intelligence Technology */}
      <RevealSection>
        <DataAnalyticsIntelligenceTechnologySection onOpenPage={onOpenDataAnalyticsPage} />
      </RevealSection>

      {/* 8. Software Architecture & Product Engineering */}
      <RevealSection>
        <SoftwareArchitectureProductEngineeringSection onOpenPage={onOpenArchPage} />
      </RevealSection>

      {/* 9. Product Development Lifecycle */}
      <RevealSection>
        <ProductDevelopmentLifecycleSection onOpenPage={onOpenPdlPage} />
      </RevealSection>

      {/* 10. APIs, Integration & Digital Connectivity */}
      <RevealSection>
        <ApisIntegrationDigitalConnectivitySection onOpenPage={onOpenApisPage} />
      </RevealSection>

      {/* 11. Enterprise & Business Software Products */}
      <RevealSection>
        <EnterpriseBusinessSoftwareProductsSection onOpenPage={onOpenEntPage} />
      </RevealSection>

      {/* 12. Government & Public Technology */}
      <RevealSection>
        <GovernmentPublicTechnologySection onOpenPage={onOpenGovPage} />
      </RevealSection>

      {/* 13. Investigation, Legal & Institutional Technology */}
      <RevealSection>
        <InvestigationLegalInstitutionalTechnologySection onOpenPage={onOpenInvPage} />
      </RevealSection>

      {/* 14. Education, Training & Skill Development Technology */}
      <RevealSection>
        <EducationTrainingSkillDevelopmentTechnologySection onOpenPage={onOpenEduPage} />
      </RevealSection>

      {/* 15. Intellectual Property & Technology */}
      <RevealSection>
        <IntellectualPropertySection onOpenPage={onOpenIpPage} />
      </RevealSection>

      {/* 16. Software Product Commercialisation */}
      <RevealSection>
        <SoftwareProductCommercialisationSection onOpenPage={onOpenSpcPage} />
      </RevealSection>

      {/* 17. Global Infrastructure & Managed Services */}
      <RevealSection>
        <GlobalInfrastructureManagedServicesSection onOpenPage={onOpenGlobalInfraPage} />
      </RevealSection>

      {/* 18. DevOps & Continuous Delivery */}
      <RevealSection>
        <DevOpsContinuousDeliverySection onOpenPage={onOpenDevOpsPage} />
      </RevealSection>

      {/* 19. Digital Experience & UI/UX Design */}
      <RevealSection>
        <DigitalExperienceDesignSection onOpenPage={onOpenDigitalExpPage} />
      </RevealSection>

      {/* 20. Regulatory Compliance & Risk Governance */}
      <RevealSection>
        <RegulatoryComplianceGovernanceSection onOpenPage={onOpenRegulatoryPage} />
      </RevealSection>

      {/* 21. AI Innovation, Research & Advanced Intelligence Automation */}
      <RevealSection>
        <AiInnovationResearchAdvancedIntelligenceAutomationSection onOpenPage={onOpenAiInnovationPage} />
      </RevealSection>

      {/* 22. IoT, Smart Systems & Edge Computing */}
      <RevealSection>
        <IotSmartEdgeSystemsSection onOpenPage={onOpenIotPage} />
      </RevealSection>

      {/* 23. Next-Generation Digital Innovation & Decentralised Intelligence */}
      <RevealSection>
        <NextGenerationDigitalInnovationDecentralisedIntelligenceSection onOpenPage={onOpenNextGenPage} />
      </RevealSection>
    </>
  );
}
