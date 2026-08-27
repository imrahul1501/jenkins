import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/guides', label: 'Guides' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="wrap">
        <NavLink to="/" className="brand">Faraway<span>flung</span></NavLink>
        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
