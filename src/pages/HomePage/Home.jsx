import HeroSection from './HeroSectionPage/HeroSection';

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
  onOpenNextGenPage
}) {
  return (
    <>
      <HeroSection />

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
