import './Footer.css';
import portfolioData from '../data/portfolioData';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal, navigation, footer, projects } = portfolioData;
  const { t } = useLanguage();

  // Filter navigation links - exclude disabled sections
  const activeLinks = navigation.links.filter(link => {
    if (link.id === 'projects' && !projects.enabled) return false;
    return true;
  });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{personal.name}</h3>
            <p>{t(footer.tagline)}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>{t(footer.quickLinksTitle)}</h4>
              {activeLinks.slice(0, 4).map((link) => (
                <a key={link.id} href={`#${link.id}`}>{t(link.label)}</a>
              ))}
            </div>
            
            <div className="footer-section">
              <h4>{t(footer.connectTitle)}</h4>
              {personal.social.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {personal.social.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              <a href={`mailto:${personal.email}`}>Email</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personal.name}. {t(footer.copyright)}</p>
          <p>{t(footer.builtWith)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
