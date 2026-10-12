import React from 'react';
import JobVacancyView from '../JobVacancyEngine/JobVacancyPage';

export default function JobVacancyPage({ onNavigate, onBack, onHome }) {
  return <JobVacancyView title="Job Vacancy" onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
}
