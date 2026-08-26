import { Link } from 'react-router-dom'
import destinations from '../data/destinations.js'
import testimonials from '../data/testimonials.js'

export default function Home() {
  const featured = destinations.slice(0, 3)
  const quote = testimonials[0]

  return (
    <>
      <section className="hero">
        <div className="hero-sun" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-code">ISSUED FOR: ANY DESTINATION, NO RETURN DATE REQUIRED</div>
          <h1>Go the long way.<br />On purpose.</h1>
          <p className="lede">
            Farflung plans overland routes by sleeper train, mountain trail and slow boat —
            six to sixteen days, six seats or fewer past that first fixed departure,
            and an itinerary built by people who have done every leg themselves.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-coral" to="/destinations">See the routes</Link>
            <Link className="btn btn-outline" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }} to="/about">Why we plan this way</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Featured routes</div>
            <h2>Three ways out of town</h2>
            <p className="lede">A sample of the six routes currently running. Each one lists the exact border crossings, ferries and trekking days involved.</p>
          </div>
          <div className="tag-grid">
            {featured.map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className="tag-card" style={{ display: 'block' }}>
                <div className="tag-hole" />
                <div className="tag-code">{d.code}</div>
                <h3>{d.name}</h3>
                <div className="tag-country">{d.country}</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--ink-soft)' }}>{d.summary}</p>
                <div className="tag-meta">
                  <span>{d.duration}</span>
                  <span className="tag-price">{d.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">How a route gets built</div>
            <h2>No two departures run the same trip twice</h2>
            <p className="lede">
              We keep six standing routes and rebuild each one every season based on what actually
              worked — a border crossing that got slower, a homestay family that stopped hosting,
              a ferry schedule that changed. The itinerary you book is the itinerary that ran last month.
            </p>
          </div>
          <ul className="check-list">
            <li>Guides who have run the specific route at least six times</li>
            <li>A rebuild plan for the two most common disruptions on every leg</li>
            <li>Group sizes capped low enough that a missed connection doesn't strand ten people</li>
            <li>Homestays and small lodges booked directly, not through a booking platform</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <blockquote className="testimonial-card center" style={{ maxWidth: '640px' }}>
            <p>"{quote.quote}"</p>
            <div className="testimonial-name">{quote.name}</div>
            <div className="testimonial-route">{quote.route}</div>
          </blockquote>
        </div>
      </section>
    </>
  )
}
