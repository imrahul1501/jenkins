import faq from '../data/faq.js'

export default function FAQ() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Questions</div>
          <h1>Before you book</h1>
          <p className="lede">The questions we get most, answered directly. Still unsure? The contact page reaches a real trip planner, not a ticket queue.</p>
        </div>
        <div style={{ maxWidth: '760px' }}>
          {faq.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
