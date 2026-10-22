import React from 'react';
import ComingSoonPage from '../../../../components/ComingSoonPage';

export default function VacancyCard2Page({ onNavigate, onBack, onHome }) {
  return (
    <ComingSoonPage
      title="Vacancy Card 2"
      categoryTitle="Careers • Current Vacancies"
      badgeText="Department-Wise Opportunities"
      description="Department-wise vacancy distributions, cadre allocations, and institutional hiring notifications will be available soon."
      onClose={onBack || (() => onNavigate?.('vacancies'))}
      showNav
    />
  );
}
