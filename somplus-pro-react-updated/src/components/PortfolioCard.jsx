import SvgIllustration from './SvgIllustration.jsx';
import Reveal from './Reveal.jsx';
import { useState } from 'react';

export default function PortfolioCard({ project, index = 0 }) {
  const [imageError, setImageError] = useState(false);

  // 1. Haddii project uu madhan yahay, ha u oggolaan koodhka inuu dillaaco
  if (!project) {
    return null; 
  }

  // 2. Isticmaal ?. si nabadgalyo ah
  const imageSrc = project?.imageUrl || project?.image;

  return (
    <Reveal className="portfolio-card glass-card" delay={index * 100}>
      <div className="portfolio-image-container" style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px 8px 0 0', marginBottom: '15px', background: '#112240' }}>
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={project?.title || 'Project'}
            className="portfolio-card-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={() => {
              setImageError(true);
            }}
          />
        ) : (
          <SvgIllustration type={project?.icon || 'web'} title={project?.title || 'Project'} />
        )}
      </div>
      <div className="portfolio-content" style={{ padding: '0 15px 15px 15px' }}>
        <span style={{ color: '#ff7a00', fontWeight: 'bold', fontSize: '0.85rem' }}>{project?.category || 'SEO'}</span>
        <h3 style={{ marginTop: '5px', marginBottom: '10px' }}>{project?.title || 'Untitled'}</h3>
        <p>{project?.description || project?.text || ''}</p>
      </div>
    </Reveal>
  );
}