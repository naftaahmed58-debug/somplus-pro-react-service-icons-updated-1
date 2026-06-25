import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section className="page-section services-page">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Everything your business needs to look professional online"
          text="Choose one service or combine them into a full digital growth package."
          centered
        />

        <div className="cards-grid services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
