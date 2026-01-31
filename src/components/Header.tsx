import { useState } from 'react';
import './Header.css';
import portfolioData from '../data/portfolioData';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal, navigation, projects } = portfolioData;
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Filter out projects link if projects section is disabled
  const visibleLinks = navigation.links.filter(link => 
    link.id !== 'projects' || projects.enabled
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>{personal.name}</h2>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {visibleLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)}>
              {t(link.label)}
            </button>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
