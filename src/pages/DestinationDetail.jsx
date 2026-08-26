import { useParams, Link } from 'react-router-dom'
import destinations from '../data/destinations.js'

export default function DestinationDetail() {
  const { slug } = useParams()
  const dest = destinations.find((d) => d.slug === slug)

  if (!dest) {
    return (
      <section>
        <div className="wrap center">
          <h1>Route not found</h1>
          <p className="lede center">That route isn't on the current map.</p>
          <Link className="btn btn-coral" to="/destinations">Back to all routes</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <div className="hero-code">{dest.code} · {dest.country}</div>
          <h1>{dest.name}</h1>
          <p className="lede">{dest.summary}</p>
          <div className="hero-actions">
            <Link className="btn btn-coral" to="/contact">Ask about this route</Link>
            <Link className="btn btn-outline" style={{ color: 'var(--paper)', borderColor: 'var(--paper)' }} to="/destinations">All routes</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">Day by day</div>
            <h2>Itinerary</h2>
            <ul className="itinerary">
              {dest.itinerary.map((step) => (
                <li key={step.day}>
                  <span className="day">Day {step.day}</span>
                  <span>{step.plan}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="tour-card">
              <div className="tour-tag">Route facts</div>
              <div><strong>Duration:</strong> {dest.duration}</div>
              <div><strong>Best season:</strong> {dest.season}</div>
              <div><strong>Route code:</strong> {dest.code}</div>
              <div><strong>From:</strong> <span className="tag-price">{dest.price}</span> per person</div>
            </div>
            <h3 style={{ marginTop: 32 }}>Highlights</h3>
            <ul className="check-list">
              {dest.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
