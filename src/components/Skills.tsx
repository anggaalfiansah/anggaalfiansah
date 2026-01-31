import './Skills.css';
import portfolioData from '../data/portfolioData';
import { useLanguage } from '../hooks/useLanguage';

const Skills = () => {
  const { skills } = portfolioData;
  const { categories: skillCategories } = skills;
  const { t } = useLanguage();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">{t(skills.title)}</h2>
        <p className="section-subtitle">
          {t(skills.subtitle)}
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index: number) => (
            <div key={index} className="skill-category">
              <div className="skills-category-header">
                <span className="skills-category-icon">{category.icon}</span>
                <h3>{t(category.title)}</h3>
              </div>
              <div className="skills-badges">
                {category.skills.map((skill, skillIndex: number) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
