import React from 'react';
import JobVacancyView from '../JobVacancyEngine/JobVacancyPage';

export default function PartTimePage({ onNavigate, onBack, onHome }) {
  return <JobVacancyView title="Part-Time" onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
}
