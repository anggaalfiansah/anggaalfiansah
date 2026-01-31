import { useState } from 'react';
import './Projects.css';
import portfolioData from '../data/portfolioData';
import ImageModal from './ImageModal';
import { useLanguage } from '../hooks/useLanguage';

interface ModalState {
  isOpen: boolean;
  src: string;
  alt: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [modalImage, setModalImage] = useState<ModalState>({ isOpen: false, src: '', alt: '' });
  const { projects } = portfolioData;
  const { t } = useLanguage();

  const openModal = (src: string, alt: string) => {
    setModalImage({ isOpen: true, src, alt });
  };

  const closeModal = () => {
    setModalImage({ isOpen: false, src: '', alt: '' });
  };

  // Jika projects tidak di-enable, jangan render
  if (!projects.enabled) {
    return null;
  }

  const projectItems = projects.items || [];
  const filteredProjects = filter === 'all' 
    ? projectItems 
    : projectItems.filter(project => project.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">{t(projects.title)}</h2>
        <p className="section-subtitle">
          {t(projects.subtitle)}
        </p>
        
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            {t(projects.filterLabels?.all) || 'All'}
          </button>
          <button 
            className={filter === 'security' ? 'active' : ''}
            onClick={() => setFilter('security')}
          >
            {t(projects.filterLabels?.security) || 'Security'}
          </button>
          <button 
            className={filter === 'fullstack' ? 'active' : ''}
            onClick={() => setFilter('fullstack')}
          >
            {t(projects.filterLabels?.fullstack) || 'Full Stack'}
          </button>
          <button 
            className={filter === 'iot' ? 'active' : ''}
            onClick={() => setFilter('iot')}
          >
            {t(projects.filterLabels?.iot) || 'IoT'}
          </button>
          <button 
            className={filter === 'research' ? 'active' : ''}
            onClick={() => setFilter('research')}
          >
            {t(projects.filterLabels?.research) || 'Research'}
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                    onClick={() => openModal(project.image, project.title)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <span className="project-emoji">{project.image}</span>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{t(project.description)}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
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

export default Projects;
