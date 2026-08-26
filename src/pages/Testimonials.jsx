import testimonials from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Traveler reviews</div>
          <h1>What the last departures said</h1>
          <p className="lede">Unedited beyond trimming for length. Full reviews are shared with each route's guide before the next departure.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p>"{t.quote}"</p>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-route">{t.route}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
