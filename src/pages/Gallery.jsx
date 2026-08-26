const frames = [
  { label: 'Uyuni salt flats, Bolivia', gradient: 'linear-gradient(160deg, #e3a83b, #efe6d2)' },
  { label: 'Lake Baikal shoreline, Russia', gradient: 'linear-gradient(160deg, #14293b, #62825f)' },
  { label: 'Koyasan temple lodging, Japan', gradient: 'linear-gradient(160deg, #b8402a, #14293b)' },
  { label: 'Toubkal massif, Morocco', gradient: 'linear-gradient(160deg, #e1573c, #e3a83b)' },
  { label: 'Lofoten rorbu cabins, Norway', gradient: 'linear-gradient(160deg, #2c4258, #62825f)' },
  { label: 'Mekong slow boat, Laos', gradient: 'linear-gradient(160deg, #62825f, #efe6d2)' },
  { label: 'Atacama night sky, Chile', gradient: 'linear-gradient(160deg, #14293b, #e3a83b)' },
  { label: 'Gobi Desert ger camp, Mongolia', gradient: 'linear-gradient(160deg, #e3a83b, #b8402a)' },
  { label: 'Naoshima art islands, Japan', gradient: 'linear-gradient(160deg, #e1573c, #62825f)' }
]

export default function Gallery() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Gallery</div>
          <h1>Postcards from the routes</h1>
          <p className="lede">
            A set of poster-style plates from past departures, standing in for the photo library
            while this bundle is offline. Swap the gradients in <code>src/pages/Gallery.jsx</code> for real trip photography.
          </p>
        </div>
        <div className="gallery-grid">
          {frames.map((f) => (
            <div key={f.label} className="gallery-frame" style={{ background: f.gradient }}>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
