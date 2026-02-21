const projects = [
  {
    name: 'Vimson Derma',
    tech: 'Django, PostgreSQL, Bootstrap, JavaScript',
    period: 'Freelance',
    certificate: 'Corporate Web Platform',
    points: [
      'Architected and deployed a multi-page corporate web platform using Django, managing complex data relations for product catalogs, clientele logs, and career listings.',
      'Engineered a scalable backend architecture with optimized PostgreSQL queries to ensure high performance and sub-second load times across all company sections.',
    ],
  },
  {
    name: 'CareBot RX: AI-based Healthcare Chatbot',
    tech: 'LangChain, Python, Chainlit',
    period: '',
    certificate: 'Healthcare AI',
    points: [
      'Created a chatbot for answering healthcare-related queries.',
      'Implemented automated text extraction from PDFs and images using Azure OCR, enabling the system to parse and analyze lab results with high accuracy.',
    ],
  },
  
]

const intro = 'Notable projects spanning full-stack development, healthcare AI, real-time systems, and infrastructure.'

export default function DetailedProjects() {
  return (
    <div className="detail-section-wrapper">
      <h2 className="detail-section-heading">Projects</h2>
      <p className="detail-section-intro">{intro}</p>
      <div className="detail-section-card">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="detail-entry">
              <div className="detail-entry-left">
                <h3 className="detail-entry-title">{project.name}</h3>
                <span className="detail-entry-role">{project.tech}</span>
                {project.period && <span className="detail-date-pill">{project.period}</span>}
              </div>
              <div className="detail-entry-right">
                <h4 className="detail-entry-subtitle">{project.certificate}</h4>
                {project.points ? (
                  <ul className="detail-entry-points">
                    {project.points.map((point, i) => (
                      <li key={i} className="detail-entry-desc">{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="detail-entry-desc">{project.description}</p>
                )}
              </div>
            </div>
            {index < projects.length - 1 && <hr className="detail-entry-divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}
