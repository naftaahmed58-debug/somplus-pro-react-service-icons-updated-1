import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or may have been moved.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  );
}
