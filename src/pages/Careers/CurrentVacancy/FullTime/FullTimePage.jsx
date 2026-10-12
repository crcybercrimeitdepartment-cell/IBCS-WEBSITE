import React from 'react';
import JobVacancyView from '../JobVacancyEngine/JobVacancyPage';

export default function FullTimePage({ onNavigate, onBack, onHome }) {
  return <JobVacancyView title="Full-Time" onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
}
