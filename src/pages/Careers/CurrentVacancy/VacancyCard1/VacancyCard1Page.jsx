import React from 'react';
import ComingSoonPage from '../../../../components/ComingSoonPage';

export default function VacancyCard1Page({ onNavigate, onBack, onHome }) {
  return (
    <ComingSoonPage
      title="Vacancy Card 1"
      categoryTitle="Careers • Current Vacancies"
      badgeText="Specialized Technical Hiring"
      description="Detailed vacancy requirements, job descriptions, and qualification matrices for this category are currently being finalized and will be published shortly."
      onClose={onBack || (() => onNavigate?.('vacancies'))}
      showNav
    />
  );
}
