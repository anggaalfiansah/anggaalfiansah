import { useState, useEffect, type MouseEvent } from 'react';
import './ImageModal.css';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    // Handle ESC key to close
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3)); // Max 3x zoom
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5)); // Min 0.5x zoom
  };

  const handleReset = () => {
    setZoomLevel(1);
  };

  const handleClose = () => {
    setZoomLevel(1); // Reset zoom when closing
    onClose();
  };

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={handleClose}>
      <div className="image-modal-content" onClick={handleContentClick}>
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>

        <div className="modal-controls">
          <button onClick={handleZoomOut} disabled={zoomLevel <= 0.5}>
            🔍−
          </button>
          <button onClick={handleReset}>
            {Math.round(zoomLevel * 100)}%
          </button>
          <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>
            🔍+
          </button>
        </div>

        <div className="modal-image-container">
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ transform: `scale(${zoomLevel})` }}
            className="modal-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
