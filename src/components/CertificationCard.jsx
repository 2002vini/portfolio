import { useState } from 'react'
import CertificateModal from './CertificateModal'

const certifications = [
  { name: 'AWS Solutions Architect', issuer: 'AWS', year: '2024', certificateImage: '/certificates/aws.png', icon: '/aws.svg' },
  { name: 'Foundations of Cyber Security ', issuer: 'Google', year: '2024', certificateImage: '/certificates/cyber-security.png', icon: '/cybersecurity.svg' },
  { name: 'Mastering Agentic AI and MCP ', issuer: 'Google', year: '2024', certificateImage: '/certificates/cyber-security.png', icon: '/ai.svg' },

]

export default function CertificationCard() {
  const [modalState, setModalState] = useState({ isOpen: false, imageSrc: '', title: '' })

  const openCertificate = (cert) => {
    setModalState({
      isOpen: true,
      imageSrc: cert.certificateImage,
      title: cert.name,
    })
  }

  const closeModal = () => {
    setModalState({ isOpen: false, imageSrc: '', title: '' })
  }

  return (
    <>
      <div className="card certification-card">
        <h3 className="card-title">
          Certifications
          <span className="card-badge-count">{certifications.length}</span>
        </h3>
        <div className="badges-container">
          {certifications.map((cert, index) => (
            <button
              key={index}
              type="button"
              className="cert-badge cert-badge-clickable"
              onClick={() => openCertificate(cert)}
              title={`View ${cert.name} certificate`}
            >
              <div className="cert-badge-hex">
                <img src={cert.icon} alt="Certificate" className="cert-badge-icon" />
              </div>
              <span className="cert-name">{cert.name}</span>
            </button>
          ))}
        </div>
      </div>
      <CertificateModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
      />
    </>
  )
}
