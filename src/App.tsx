import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { HealthcareOpsPage } from './pages/HealthcareOpsPage';
import { SupplyChainPage } from './pages/SupplyChainPage';
import { ProcurementPage } from './pages/ProcurementPage';
import { BusinessOpsPage } from './pages/BusinessOpsPage';
import { EventsPage } from './pages/EventsPage';

// Real-time SPA Route Tracker for Google Analytics 4 & Zoho SalesIQ
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const fullPath = window.location.pathname + window.location.hash;
    const pageTitle = document.title;

    // 1. GA4 SPA page tracking
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_path: fullPath,
        page_title: pageTitle,
      });
    }

    // 2. Zoho SalesIQ real-time visitor page update
    const salesiq = (window as any).$zoho?.salesiq;
    if (salesiq?.visitor) {
      if (typeof salesiq.visitor.cpage === 'function') {
        salesiq.visitor.cpage(window.location.href);
      }
      if (typeof salesiq.visitor.pagetitle === 'function') {
        salesiq.visitor.pagetitle(pageTitle);
      }
    }
  }, [location]);

  return null;
}

export function App() {
  return (
    <HashRouter>
      <AnalyticsTracker />
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
