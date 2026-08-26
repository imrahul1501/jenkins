import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <h4>Farflung</h4>
          <p style={{ maxWidth: '28ch', opacity: 0.85 }}>
            Slow, overland routes by train, trail and small boat. Planned by people who have walked every stop.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/destinations">Destinations</Link>
          <Link to="/tours">Tours & group sizes</Link>
          <Link to="/guides">Field guides</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About Farflung</Link>
          <Link to="/testimonials">Traveler reviews</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Reach us</h4>
          <a href="mailto:route@farflung.example">route@farflung.example</a>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} FARFLUNG TRAVEL CO. — ROUTE PLANNED, TICKET ISSUED.
      </div>
    </footer>
  )
}
