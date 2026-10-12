import React from 'react';
import JobVacancyView from '../JobVacancyEngine/JobVacancyPage';

export default function InternshipPage({ onNavigate, onBack, onHome }) {
  return <JobVacancyView title="Internship" onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
}
