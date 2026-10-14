import React from 'react';
import JobVacancyView from '../JobVacancyEngine/JobVacancyPage';

export default function RemoteJobPage({ onNavigate, onBack, onHome }) {
  return <JobVacancyView title="Remote Job" onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
}
