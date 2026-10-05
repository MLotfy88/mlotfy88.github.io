import React, { useEffect } from 'react';
import { rolesData } from '../data/rolesData';
import { ExecutiveNavbar } from '../components/ExecutiveNavbar';
import { RoleHero } from '../components/RoleHero';
import { ExecutiveStories } from '../components/ExecutiveStories';
import { DigitalEnablerBox } from '../components/DigitalEnablerBox';
import { RoleCapabilities } from '../components/RoleCapabilities';
import { RoleTimeline } from '../components/RoleTimeline';
import { RoleFooterCta } from '../components/RoleFooterCta';
import { Footer } from '../components/Footer';

export const HealthcareOpsPage: React.FC = () => {
  const role = rolesData['healthcare-ops'];

  useEffect(() => {
    document.title = "Healthcare Operations Director | Mahmoud Mohamed Lotfy";
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', backgroundColor: '#080C0E', color: '#F8FAFC' }}>
      <ExecutiveNavbar currentRoleSlug="healthcare-ops" />
      <main>
        <RoleHero role={role} />
        <ExecutiveStories stories={role.stories} roleTitle={role.roleTitle} />
        <DigitalEnablerBox enabler={role.digitalEnabler} />
        <RoleCapabilities capabilities={role.capabilities} roleTitle={role.roleTitle} />
        <RoleTimeline timeline={role.timeline} roleTitle={role.roleTitle} />
        <RoleFooterCta currentRole={role} />
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareOpsPage;
