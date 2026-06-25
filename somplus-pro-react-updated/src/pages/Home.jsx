import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import Reveal from '../components/Reveal.jsx';
import heroImg from '../assets/sawir.png';
import { services, stats, projects, testimonials, posts } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section page-section">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Grow • Engage • Succeed</span>
            <h1>
              Build a digital presence that makes your business look
              <span> premium.</span>
            </h1>
            <p>
              SomPlus Digital creates websites, brands, content, and marketing systems
              that help ambitious businesses attract customers and grow faster.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={160}>
            <div className="dashboard-preview glass-card" style={{ padding: '10px' }}>
              <div className="browser-dots" style={{ marginBottom: '15px' }}>
                <span />
                <span />
                <span />
              </div>

              <img
                src={heroImg}
                alt="SomPlus Digital Marketing" 
                style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }}
              />

              <div className="mini-metrics" style={{ marginTop: '15px' }}>
                <span>Reach +72%</span>
                <span>Leads +41%</span>
                <span>Trust +95%</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container stats-grid">
        {stats.map((item) => (
          <StatsCounter key={item.label} item={item} />
        ))}
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="A complete digital growth system"
            text="From your website to your content and campaign strategy, every part is designed to work together."
            centered
          />

          <div className="cards-grid services-grid">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section soft-section">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio"
            title="Client-ready work presentation"
            text="These project cards use custom SVG illustrations instead of empty placeholders."
            centered
          />

          <div className="cards-grid">
            {projects.slice(0, 3).map((project, index) => (
              <PortfolioCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-section">
          <Reveal>
            <span className="eyebrow">Process</span>
            <h2>Clean workflow, clear communication, better results.</h2>
            <p>
              We start by understanding your business, then we design a practical digital
              system that helps customers trust you and contact you faster.
            </p>
            <ul className="check-list">
              <li>Discovery and brand direction</li>
              <li>Wireframe and content structure</li>
              <li>Responsive React development</li>
              <li>Launch support and performance review</li>
            </ul>
          </Reveal>

          <Reveal className="process-panel glass-card" delay={140}>
            <div className="timeline-item">
              <strong>01</strong>
              <div>
                <h3>Strategy</h3>
                <p>Understand your goals, customer, offer, and position.</p>
              </div>
            </div>
            <div className="timeline-item">
              <strong>02</strong>
              <div>
                <h3>Design</h3>
                <p>Create premium layouts and brand-consistent sections.</p>
              </div>
            </div>
            <div className="timeline-item">
              <strong>03</strong>
              <div>
                <h3>Build</h3>
                <p>Develop clean React components with responsive CSS.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="page-section soft-section">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="Built for client confidence"
            text="Use these testimonials now, then replace them with real client feedback."
            centered
          />

          <div className="cards-grid">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} className="testimonial-card glass-card" delay={index * 90}>
                <p>“{testimonial.quote}”</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Blog"
            title="Insights that support growth"
            text="Professional blog cards are included to make the website feel complete and scalable."
            centered
          />

          <div className="cards-grid blog-grid">
            {posts.map((post, index) => (
              <Reveal key={post.title} className="blog-card glass-card" delay={index * 90}>
                {post.image && (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }} 
                  />
                )}
                <span>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to="/blog" className="text-link">Read article →</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container cta-section">
        <Reveal>
          <span className="eyebrow light">Ready to grow?</span>
          <h2>Let’s build the digital system behind your next stage.</h2>
          <p>
            Get a professional website, strong brand presence, and a marketing foundation
            that makes your business easier to trust.
          </p>
          <Link to="/contact" className="btn btn-light">
            Contact SomPlus
          </Link>
        </Reveal>
      </section>
    </>
  );
}