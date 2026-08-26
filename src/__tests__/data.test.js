import { describe, it, expect } from 'vitest'
import destinations from '../data/destinations.js'
import tours from '../data/tours.js'
import guides from '../data/guides.js'
import testimonials from '../data/testimonials.js'
import faq from '../data/faq.js'

describe('content data integrity', () => {
  it('has at least six destinations, each with a unique slug', () => {
    expect(destinations.length).toBeGreaterThanOrEqual(6)
    const slugs = destinations.map((d) => d.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every destination has an itinerary and at least one highlight', () => {
    destinations.forEach((d) => {
      expect(d.itinerary.length).toBeGreaterThan(0)
      expect(d.highlights.length).toBeGreaterThan(0)
    })
  })

  it('has four tour formats', () => {
    expect(tours.length).toBe(4)
  })

  it('has guide articles and testimonials', () => {
    expect(guides.length).toBeGreaterThan(0)
    expect(testimonials.length).toBeGreaterThan(0)
  })

  it('has FAQ entries with both a question and an answer', () => {
    expect(faq.length).toBeGreaterThan(0)
    faq.forEach((f) => {
      expect(f.q).toBeTruthy()
      expect(f.a).toBeTruthy()
    })
  })
})
