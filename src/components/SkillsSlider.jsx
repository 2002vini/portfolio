const skillsRow1 = [
  'C / C++',
  'Python',
  'Java',
  'AWS',
  'Django',
  'Flask',
  'LangChain',
  'AI / ML',
  'PostgreSQL',
  'Redis',
]

const skillsRow2 = [
  'Docker',
  'Kubernetes',
  'REST APIs',
  'Microservices',
  'Git',
  'Linux',
  'FastAPI',
  'MongoDB',
  'GraphQL',
  'Terraform',
]

export default function SkillsSlider() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills & Expertise</h2>
      <div className="skills-slider-wrap">
        <div className="skills-slider-track skills-slider-track-left">
          {[...skillsRow1, ...skillsRow1].map((skill, index) => (
            // <span key={index} className="skills-slide-item">{skill}</span>
            <span key={index} className="experience-tag">{skill}</span>

          ))}
        </div>
      </div>
      <div className="skills-slider-wrap">
        <div className="skills-slider-track skills-slider-track-right">
          {[...skillsRow2, ...skillsRow2].map((skill, index) => (
            // <span key={`r2-${index}`} className="skills-slide-item">{skill}</span>
            <span key={`r2-${index}`} className="experience-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
