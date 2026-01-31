import './About.css';
import portfolioData from '../data/portfolioData';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../types';

const About = () => {
  const { about } = portfolioData;
  const { t, language } = useLanguage();
  
  // Get paragraphs based on language
  const paragraphs = about.paragraphs[language as Language] || about.paragraphs.id;
  
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">{language === 'id' ? 'Tentang Saya' : 'About Me'}</h2>
        <div className="about-content">
          <div className="about-text">
            {paragraphs.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="about-stats">
              {about.stats.map((stat, index: number) => (
                <div key={index} className="stat">
                  <h3>{stat.number}</h3>
                  <p>{t(stat.label)}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-skills-highlight">
            <h3>{language === 'id' ? 'Apa yang Saya Lakukan' : 'What I Do'}</h3>
            <div className="skill-cards">
              {about.services.map((service, index: number) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{service.icon}</div>
                  <h4>{t(service.title)}</h4>
                  <p>{t(service.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
