export default function About() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <div className="hero-code">FOUNDED 2014 · LISBON, PORTUGAL</div>
          <h1>We plan the routes we'd actually take</h1>
          <p className="lede">
            Farflung started as a shared notebook between three guides who kept getting asked
            for the same overland routes they used on their own time off. Ten years later it's
            six standing routes, run by the same small group of people who walked, rode and
            sailed every leg first.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What we're not doing</div>
            <h2>Not a booking platform. A route.</h2>
            <p className="lede">
              We don't aggregate other operators' trips or resell hotel inventory. Every route on
              this site is one we run ourselves, with guides we've worked with directly for years.
            </p>
          </div>
          <div className="about-grid">
            <div className="value-card">
              <h3>Small by design</h3>
              <p>Eight travelers per departure, max, outside of full charters. A missed connection shouldn't strand ten people.</p>
            </div>
            <div className="value-card">
              <h3>Rebuilt every season</h3>
              <p>Each route is re-walked before its season opens. If a homestay stops hosting or a ferry schedule shifts, the itinerary changes before you book it, not after.</p>
            </div>
            <div className="value-card">
              <h3>Direct relationships</h3>
              <p>Lodging and transport booked directly with the people running them, not through a reseller layer that adds cost and removes accountability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="stat-row">
            <div className="stat"><strong>6</strong>standing routes</div>
            <div className="stat"><strong>11</strong>years running</div>
            <div className="stat"><strong>2,900+</strong>travelers routed</div>
            <div className="stat"><strong>8</strong>max group size</div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">The team</div>
            <h2>Guides first, planners second</h2>
            <p className="lede">Every route lead has run their route at least six times before it goes on the calendar for other guides to lead.</p>
          </div>
          <div className="about-grid">
            <div className="value-card">
              <h3>Ana Reyes</h3>
              <p>Leads the Salt Line and River of the North routes. Ten years guiding across the Andes and Southeast Asia.</p>
            </div>
            <div className="value-card">
              <h3>Bat-Erdene Sukh</h3>
              <p>Built the Iron Road East route from scratch and still leads it every summer departure.</p>
            </div>
            <div className="value-card">
              <h3>Ingrid Solberg</h3>
              <p>Runs Fjord & Fell and consults on cold-weather logistics for every northern route.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
