import React from 'react';
import ComingSoonPage from '../../../../components/ComingSoonPage';

export default function PostVacancyPage({ onNavigate, onBack, onHome }) {
  return (
    <ComingSoonPage
      title="Post Vacancy"
      categoryTitle="Careers • Current Vacancies"
      badgeText="Employer & Departmental Portal"
      description="The Vacancy Posting and Requirements Management portal is currently under active engineering and will be available soon for authorized personnel."
      onClose={onBack || (() => onNavigate?.('vacancies'))}
      showNav
    />
  );
}
