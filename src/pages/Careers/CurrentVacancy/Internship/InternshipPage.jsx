import React from 'react';
import ComingSoonPage from '../../../../components/ComingSoonPage';

export default function InternshipPage({ onNavigate, onBack, onHome }) {
  return (
    <ComingSoonPage
      title="Internship"
      categoryTitle="Careers • Current Vacancies"
      badgeText="Student Fellowships & Practical Training"
      description="The Internship & Practical Training portal is currently under active engineering and will be available soon with application guidelines, eligibility criteria, and stipend details."
      onClose={onBack || (() => onNavigate?.('vacancies'))}
      showNav
    />
  );
}
