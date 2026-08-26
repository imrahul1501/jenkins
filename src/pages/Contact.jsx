import { useState } from 'react'
import destinations from '../data/destinations.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section>
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h1>Talk to a trip planner</h1>
          <p className="lede">
            Every message routes to a planner who has actually run at least one of these trips.
            Expect a reply within two working days.
          </p>

          {sent ? (
            <div className="tour-card mt-lg">
              <h3>Message sent</h3>
              <p>A trip planner will reply to the address you gave us within two working days.</p>
            </div>
          ) : (
            <form className="form-grid mt-lg" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="route">Route you're asking about</label>
                <select id="route" name="route" defaultValue="">
                  <option value="" disabled>Select a route</option>
                  {destinations.map((d) => (
                    <option key={d.slug} value={d.slug}>{d.name} ({d.code})</option>
                  ))}
                  <option value="custom">Something custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button className="btn btn-coral" type="submit">Send message</button>
            </form>
          )}
        </div>

        <div>
          <div className="contact-detail">
            <span className="stamp">EMAIL<br />ROUTE</span>
            <div>
              <h3>Email</h3>
              <p>route@farflung.example<br />Replies within two working days.</p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="stamp">CALL<br />DESK</span>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567<br />Mon–Fri, 9:00–18:00 CET.</p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="stamp">OFFICE<br />VISIT</span>
            <div>
              <h3>Office</h3>
              <p>Rua das Flores 82<br />1200-195 Lisbon, Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
