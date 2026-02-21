const navItems = [
  { id: 'hero', label: 'Home', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
  { id: 'certifications', label: 'Certifications', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { id: 'about', label: 'About', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { id: 'experience', label: 'Experience', icon: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z' },
  { id: 'projects', label: 'Projects', icon: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 6h-2v2h2v-2zm0-4h-2v2h2v-2zm0-4h-2v2h2V8zm4 8h-2v2h2v-2zm0-4h-2v2h2v-2z' },
  { id: 'contact', label: 'Contact', icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z' },
]

export default function RightNav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="right-nav" aria-label="Section navigation">
      <div className="right-nav-inner">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="right-nav-btn"
            onClick={() => scrollTo(item.id)}
            title={item.label}
            aria-label={item.label}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d={item.icon} />
            </svg>
            <span className="right-nav-tooltip">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
