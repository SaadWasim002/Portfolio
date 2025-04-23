
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <div className="space-y-32">
          <div className="animate-fade-in"><Hero /></div>
          <div className="animate-fade-in delay-100"><About /></div>
          <div className="animate-fade-in delay-200"><Skills /></div>
          <div className="animate-fade-in delay-300"><Education /></div>
          <div className="animate-fade-in delay-400"><Certifications /></div>
          <div className="animate-fade-in delay-500"><Projects /></div>
          <div className="animate-fade-in delay-600"><Contact /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
