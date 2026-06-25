import SectionHeader from '../components/SectionHeader.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import { projects } from '../data/siteData.js';

export default function Portfolio() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Premium project showcase"
          text="Use this gallery to present client work, case studies, campaign visuals, and website projects."
          centered
        />

        <div className="cards-grid">
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
