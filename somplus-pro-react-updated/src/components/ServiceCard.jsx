import SvgIllustration from './SvgIllustration.jsx';
import Reveal from './Reveal.jsx';
import { useState } from 'react';

export default function ServiceCard({ service, index = 0 }) {
  // Waxaan u isticmaaleynaa state si aan u ogaano haddii sawirku dillaaco
  const [imageError, setImageError] = useState(false);

  // Waxaan hubineynaa inaan qaadano link-ga saxda ah ee ku jira siteData.js
  const imageSrc = service.image || service.imageUrl;

  return (
    <Reveal className="service-card glass-card" delay={index * 90}>
      <div className="service-art" style={{ width: '100%', height: '160px', overflow: 'hidden', borderRadius: '8px', marginBottom: '15px', padding: '0', background: '#112240' }}>
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={service.title}
            className="service-card-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={() => {
              // Haddii uu sawirku soo kici waayo, state-ka bedel si loo muujiyo SvgIllustration
              setImageError(true);
            }}
          />
        ) : (
          <SvgIllustration type={service.icon || service.image} title={service.title} />
        )}
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <a href="/contact" className="text-link">
        Discuss this service →
      </a>
    </Reveal>
  );
}