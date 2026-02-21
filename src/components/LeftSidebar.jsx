import ProfileSection from './ProfileSection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'

export default function LeftSidebar({ isOpen = false, onClose }) {
  return (
    <aside className={`left-sidebar ${isOpen ? 'open' : ''}`} aria-hidden={onClose && !isOpen}>
      {onClose && (
        <button
          type="button"
          className="left-sidebar-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
      <ProfileSection />
      <EducationSection />
      <ContactSection />
      <a href={`${import.meta.env.BASE_URL}ViniHundlani.pdf`} className="btn btn-download" download onClick={onClose}>
        DOWNLOAD CV
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      </a>
    </aside>
  )
}
