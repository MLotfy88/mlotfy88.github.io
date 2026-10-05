import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { HealthcareOpsPage } from './pages/HealthcareOpsPage';
import { SupplyChainPage } from './pages/SupplyChainPage';
import { ProcurementPage } from './pages/ProcurementPage';
import { BusinessOpsPage } from './pages/BusinessOpsPage';
import { EventsPage } from './pages/EventsPage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Main Executive Hub */}
        <Route path="/" element={<LandingPage />} />

        {/* 5 Targeted Executive Dossiers */}
        <Route path="/healthcare-ops" element={<HealthcareOpsPage />} />
        <Route path="/supply-chain" element={<SupplyChainPage />} />
        <Route path="/procurement" element={<ProcurementPage />} />
        <Route path="/business-ops" element={<BusinessOpsPage />} />
        <Route path="/events" element={<EventsPage />} />

        {/* Convenient Route Aliases */}
        <Route path="/healthcare" element={<Navigate to="/healthcare-ops" replace />} />
        <Route path="/supplychain" element={<Navigate to="/supply-chain" replace />} />
        <Route path="/sourcing" element={<Navigate to="/procurement" replace />} />
        <Route path="/operations" element={<Navigate to="/business-ops" replace />} />
        <Route path="/conferences" element={<Navigate to="/events" replace />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
