import tours from '../data/tours.js'

export default function Tours() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Tour formats</div>
          <h1>Same routes, four ways to book them</h1>
          <p className="lede">
            Every route on the site can run in any of these four formats. Pick the one that matches who's traveling —
            the itinerary flexes, the route doesn't.
          </p>
        </div>
        <div className="tour-grid">
          {tours.map((t) => (
            <div key={t.name} className="tour-card">
              <span className="tour-tag">{t.tag}</span>
              <h3>{t.name}</h3>
              <div className="tour-size">{t.groupSize}</div>
              <p style={{ color: 'var(--ink-soft)' }}>{t.style}</p>
              <ul className="tour-includes">
                {t.includes.map((i) => <li key={i}>— {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
