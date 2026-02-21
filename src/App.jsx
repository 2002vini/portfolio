import { useState } from 'react'
import LeftSidebar from './components/LeftSidebar'
import RightContent from './components/RightContent'
import RightNav from './components/RightNav'
import './App.css'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app">
      <button
        type="button"
        className="mobile-menu-btn"
        aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen((o) => !o)}
      >
        {sidebarOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </button>
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          aria-hidden
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="layout">
        <LeftSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <RightContent />
        <RightNav />
      </div>
    </div>
  )
}
