const contactItems = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinihundlani/', text: 'https://www.linkedin.com/in/vinihundlani/' },
  { icon: 'email', label: 'Email', href: 'mailto:vini.hundlani2024@gmail.com', text: 'vini.hundlani2024@gmail.com' },
  { icon: 'phone', label: 'Phone', href: 'tel:+91 9909170689', text: '+91 9909170689' },
]

export default function ContactSection() {
  return (
    <div className="card contact-card">
      <h3 className="card-title">Contact Me</h3>
      <ul className="contact-list">
        {contactItems.map((item, index) => (
          <li key={index} className="contact-item">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">
                {item.icon === 'linkedin' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {item.icon === 'email' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                )}
                {item.icon === 'phone' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                )}
              </span>
              <span className="contact-text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
