import Reveal from './Reveal.jsx';

export default function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <Reveal className={centered ? 'section-header centered' : 'section-header'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
