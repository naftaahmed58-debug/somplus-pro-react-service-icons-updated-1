
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import aboutImg from '../assets/about-image.png';

export default function About() {
  return (
    <section className="page-section soft-section">
      <div className="container split-section" style={{ padding: '40px 0' }}>
        <Reveal>
          <SectionHeader
            eyebrow="About SomPlus"
            title="A digital partner for businesses that want more than random marketing."
            text="SomPlus Digital helps businesses look professional, communicate clearly, and build systems that support real growth."
          />

          <div className="rich-text" style={{ marginTop: '20px' }}>
            <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
              We combine branding, web design, content, and digital marketing into one
              clear system. Our goal is not only to make things look good, but to make your
              business easier to understand, easier to trust, and easier to contact.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              Every page, section, visual, and call-to-action is designed with a practical
              purpose: helping your audience move from awareness to confidence.
            </p>
          </div>
        </Reveal>

        <Reveal className="glass-card about-visual" delay={130} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '500px', aspectRatio: '4 / 3' }}>
            <img
              src={aboutImg}
              alt="Growth strategy"
              style={{ width: '100%', height: '100%', borderRadius: '24px', objectFit: 'cover' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}