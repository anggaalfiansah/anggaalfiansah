import { useState } from 'react';
import './Experience.css';
import portfolioData from '../data/portfolioData';
import ImageModal from './ImageModal';
import { useLanguage } from '../hooks/useLanguage';

interface ModalState {
  isOpen: boolean;
  src: string;
  alt: string;
}

const Experience = () => {
  const { experience } = portfolioData;
  const { t } = useLanguage();
  const [modalImage, setModalImage] = useState<ModalState>({ isOpen: false, src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setModalImage({ isOpen: true, src, alt });
  };

  const closeModal = () => {
    setModalImage({ isOpen: false, src: '', alt: '' });
  };

  // Jika experience tidak di-enable atau tidak ada, jangan render
  if (!experience || !experience.enabled) {
    return null;
  }

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">{t(experience.title)}</h2>
        {experience.subtitle && (
          <p className="section-subtitle">{t(experience.subtitle)}</p>
        )}

        <div className="experience-content">
          {experience.categories.map((category, catIndex: number) => (
            <div key={catIndex} className="experience-category">
              <div className="experience-category-header">
                <span className="experience-category-icon">{category.icon}</span>
                <h3>{t(category.title)}</h3>
              </div>

              <div className="experience-timeline">
                {category.items.map((item, itemIndex: number) => (
                  <div key={itemIndex} className="experience-item">
                    <div className="experience-marker"></div>
                    <div className="experience-card">
                      <div className="experience-header">
                        <div>
                          <h4>{t(item.title)}</h4>
                          <p className="experience-organization">{t(item.organization)}</p>
                        </div>
                        <span className="experience-date">{item.date}</span>
                      </div>
                      
                      <p className="experience-description">{t(item.description)}</p>
                      
                      {/* Media: Multiple Images, Single Image, or Video */}
                      {item.media && (
                        <div className="experience-media">
                          {/* Multiple Images with Grid */}
                          {item.media.images && item.media.images.length > 0 ? (
                            <div className="media-grid">
                              {item.media.images.map((image, imgIdx: number) => (
                                <div key={imgIdx} className="media-grid-item">
                                  <img 
                                    src={image.url}
                                    alt={t(image.alt) || t(item.title)}
                                    className="grid-image"
                                    loading="lazy"
                                    onClick={() => openModal(image.fullUrl || image.url, t(image.alt) || t(item.title))}
                                  />
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      )}
                      
                      {item.skills && item.skills.length > 0 && (
                        <div className="skills-tags">
                          {item.skills.map((skill: string, skillIndex: number) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal 
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
      />
    </section>
  );
};

export default Experience;
