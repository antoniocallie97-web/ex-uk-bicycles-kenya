
import React from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalogue } from './components/Catalogue';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(
        `Navigation target "${sectionId}" was not found. Check the section ID.`
      );
      return;
    }

    const navOffset = 90;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementPosition - navOffset),
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
      {/* Sticky navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main website content */}
      <main className="flex-1">
        {/* Home / Hero */}
        <Hero
          onExploreCatalogue={() => scrollToSection('catalogue')}
          onWhyChooseUs={() => scrollToSection('why-us')}
        />

        {/* Bicycle catalogue */}
        <Catalogue />

        {/* Why choose Ex-UK Bicycles */}
        <WhyChooseUs />

        {/* About the business */}
        <AboutUs />

        {/* Frequently asked questions */}
        <FAQSection />

        {/* Contact section */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp contact button */}
      <FloatingWhatsApp />

      {/* Website footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
