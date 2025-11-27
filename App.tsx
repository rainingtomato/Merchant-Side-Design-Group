import React from 'react';
import { AuroraBackground } from './components/ui/aurora-background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessServices from './components/BusinessServices';
import KeyProjects from './components/KeyProjects';
import ProfessionalCore from './components/ProfessionalCore';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <AuroraBackground className="fixed inset-0 z-[-1]" showRadialGradient={true}>
        {/* Used as background layer */}
      </AuroraBackground>
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <BusinessServices />
        <KeyProjects />
        <ProfessionalCore />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default App;