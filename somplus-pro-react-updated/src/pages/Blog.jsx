import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import { posts } from '../data/siteData.js';

export default function Blog() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Blog"
          title="Digital marketing knowledge hub"
          text="Helpful articles that make the website feel complete and valuable for visitors."
          centered
        />

        <div className="blog-list">
          {posts.map((post, index) => (
            <Reveal key={post.title} className="blog-row glass-card" delay={index * 90}>
              <div>
                <span>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <a href="#" className="text-link">Read more →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
