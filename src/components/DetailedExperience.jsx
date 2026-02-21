const primaryStack = ['Python', 'Java', 'Go', 'Node.js', 'Django', 'Flask', 'FastAPI', 'React']
const tools = ['AWS', 'Docker', 'PostgreSQL', 'Redis', 'MongoDB', 'Git', 'Kubernetes', 'REST APIs']

const experiences = [
  {
    period: 'July 2024 - Present',
    role: 'Software Engineer (Full Time)',
    company: 'Crest Data',
    location: 'Remote',
    projects: [
      {
        name: 'AI enhanced SOC automation platform',
        skills: ['Python', 'Celery', 'Splunk', 'RBAC', 'Agentic workflows','Keycloak','FastAPI','Langchain','OpenAI','Langsmith','Langgraph'],
        points: [
          'Designed and built a backend platform to automate Level-1 SOC workflows, reducing incident response time and improving analyst efficiency by 85%.',
          'Built agentic workflows to automatically investigate security alerts and classify them as true positive, false positive, or benign, reducing manual effort and cutting alert triaging time by nearly 80%.',
          'Implemented Celery-based asynchronous tasks for dynamically fetching Splunk alerts, ensuring timely and reliable data ingestion.',
          'Integrated Role-Based Access Control (RBAC) to restrict access.',
        ],
      },
      {
        name: 'SCIM Provisioning Server (Go)',
        skills: ['Go', 'SCIM 2.0', 'Microservices', 'Multi-tenant SaaS','SSO','OAUTH2','JWT'],
        points: [
          'Designed and implemented SCIM 2.0–compliant backend services in Go as part of a microservices-based architecture to automate user provisioning and lifecycle management for a multi-tenant SaaS platform.',
          'Led the transition from manual provisioning to automated SCIM-based synchronization, reducing user onboarding time by 80%.',
          'Built secure and scalable user management APIs.',
        ],
      },
      {
        name: 'Asynchronous CSV Export API for Kibana',
        skills: ['TypeScript', 'Kibana', 'AWS', 'Asynchronous APIs','S3'],
        points: [
          'Built an asynchronous API in TypeScript to export large datasets from the Kibana UI in CSV format without UI timeouts or performance bottlenecks.',
          'Integrated AWS services for storage and delivery of exported data.',
        ],
      },
    ],
  },
  {
    period: 'Jan 2024 - June 2024 (6 months)',
    role: 'Software Engineering Intern',
    company: 'Crest Data',
    location: 'Ahmedabad',
    projects: [
      {
        name: 'Frontend for Migration Platform',
        skills: ['React', 'State Management', 'Redux', 'JavaScript'],
        points: [
          'Developed and integrated new forms and screens into an existing React-based migration platform, enhancing functionality and user experience..',
          'Refactored legacy code to implement industry best practices, improving maintainability, readability, and structure.',
          'Migrated component-level state management to Redux, enabling centralized state handling, predictable data flow, and improved scalability.',
        ],
      },
    ],
  },
  {
    period: '2023 (3 months)',
    role: 'Software Development Intern',
    company: 'Madhyam Impact Foundation',
    location: 'Internship',
    projects: [
      {
        name: 'Created chat platform like whatsapp for student portal',
        skills: ['Firebase','WebSocket','Django Channels'],
        points: [
          'Developed a chat platform like WhatsApp for the student portal, allowing students to communicate with each other and with the admin.',
          'Implemented real-time messaging functionality using WebSocket and Django Channels.',
          'Used firebase for authentication and authorization.',
          'Implemented group chat functionality for students to create and join groups.',
        ]
      },
    ],
  },
]

export default function DetailedExperience() {
  return (
    <div className="detail-section-card">
    <div className="experience-section">
      <h2 className="experience-heading">Experience</h2>
     

      {/* <div className="experience-skills">
        <div className="experience-skills-block">
          <h3 className="experience-skills-title">Primary Stack</h3>
          <div className="experience-skills-tags">
            {primaryStack.map((skill, i) => (
              <span key={i} className="experience-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="experience-skills-block">
          <h3 className="experience-skills-title">Tools & Infrastructure</h3>
          <div className="experience-skills-tags">
            {tools.map((skill, i) => (
              <span key={i} className="experience-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div> */}

      <div className="experience-timeline">
        <div className="experience-timeline-line" aria-hidden />
        {experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            <div className="experience-entry-dot" aria-hidden />
            <div className="experience-entry-content">
              <span className="experience-entry-period">{exp.period}</span>
              <h3 className="experience-entry-role">{exp.role}</h3>
              <span className="experience-entry-company">{exp.company}</span>
              <span className="experience-entry-location">{exp.location}</span>
              {exp.projects ? (
                  <div className="experience-projects">
                    {exp.projects.map((project, pIndex) => (
                    <div className="experience-projects-box">
                    <div key={pIndex} className="experience-project">
                      <h4 className="experience-project-name">{project.name}</h4>
                      <ul className="experience-project-points">
                        {project.points.map((point, bIndex) => (
                          <li key={bIndex}>{point}</li>
                        ))}
                      </ul>
                      {project.skills && (
                        <div className="experience-project-skills">
                          {project.skills.map((skill, sIndex) => (
                            <span key={sIndex} className="experience-project-skill">{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    </div>

                    ))}
                  </div>
              ) : (
                <p className="experience-entry-desc">{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
