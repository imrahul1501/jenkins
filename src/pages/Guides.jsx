import guides from '../data/guides.js'

export default function Guides() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Field guides</div>
          <h1>Notes from the routes</h1>
          <p className="lede">
            Practical write-ups from guides and past travelers — packing lists, border-crossing walkthroughs,
            and the honest logistics that don't fit on a route page.
          </p>
        </div>
        <div className="guide-grid">
          {guides.map((g) => (
            <article key={g.title} className="guide-card">
              <div className="guide-tag">{g.tag}</div>
              <h3>{g.title}</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{g.excerpt}</p>
              <div className="guide-read">{g.read} read</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
