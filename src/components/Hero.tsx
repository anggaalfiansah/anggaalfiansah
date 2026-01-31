import './Hero.css';
import portfolioData from '../data/portfolioData';
import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { personal, projects } = portfolioData;
  const { t, language } = useLanguage();

  // Determine which section to scroll to for primary button
  const primarySection = projects.enabled ? 'projects' : 'experience';
  const primaryLabel = projects.enabled 
    ? (language === 'id' ? 'Lihat Karya Saya' : 'View My Work')
    : (language === 'id' ? 'Lihat Pengalaman' : 'View Experience');
  
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">{t(personal.greeting)}</p>
          <h1 className="name">{personal.name}</h1>
          <h2 className="title">
            <span className="highlight">{t(personal.title)}</span>
          </h2>
          <p className="hero-description">
            {t(personal.description)}
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById(primarySection)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {primaryLabel}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'id' ? 'Hubungi Saya' : 'Contact Me'}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {personal.profileImage ? (
              <img 
                src={personal.profileImage} 
                alt={personal.name} 
                className="profile-photo"
              />
            ) : (
              <div className="avatar-circle">
                <span>{personal.shortName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
