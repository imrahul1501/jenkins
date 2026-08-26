import { Link } from 'react-router-dom'
import destinations from '../data/destinations.js'

export default function Destinations() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">All routes</div>
          <h1>Six routes, all overland</h1>
          <p className="lede">
            Every route below runs on fixed departure dates unless you book it as a Solo Overland trip.
            Tap a route for the full day-by-day itinerary.
          </p>
        </div>
        <div className="tag-grid">
          {destinations.map((d) => (
            <Link key={d.slug} to={`/destinations/${d.slug}`} className="tag-card" style={{ display: 'block' }}>
              <div className="tag-hole" />
              <div className="tag-code">{d.code}</div>
              <h3>{d.name}</h3>
              <div className="tag-country">{d.country}</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-soft)' }}>{d.summary}</p>
              <div className="tag-meta">
                <span>{d.duration} · {d.season}</span>
                <span className="tag-price">{d.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
