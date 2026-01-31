import { useLanguage } from '../hooks/useLanguage';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
    >
      <span className={`lang-option ${language === 'id' ? 'active' : ''}`}>ID</span>
      <span className="lang-divider">/</span>
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
