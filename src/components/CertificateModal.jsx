import { useEffect } from 'react'

export default function CertificateModal({ isOpen, onClose, imageSrc, title }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Certificate preview">
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {title && <h4 className="cert-modal-title">{title}</h4>}
        <div className="cert-modal-content">
          <img src={imageSrc} alt={title || 'Certificate'} />
        </div>
      </div>
    </div>
  )
}
