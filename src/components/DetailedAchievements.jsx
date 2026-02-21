const achievements = [
  {
    title: 'Certification',
    period: '',
    certificate: 'AWS',
    detail: 'AWS Certified Solutions Architect – Associate',
  },
  {
    title: 'Leadership',
    period: '2022 – 2023',
    certificate: 'CSI Nirma University',
    detail: 'Senior Editor | Computer Society of India, Nirma University. Spearheaded campus-wide hackathons and technical workshops.',
  },
  {
    title: 'Hackathons',
    period: '',
    certificate: 'E-Cell Nirma University',
    detail: 'Earned 1st Place in the E-Cell Organized Hackathon at Nirma University.',
  },
  {
    title: 'Achievements',
    period: '',
    certificate: 'Coding & Competitive',
    detail: 'Solved 650+ problems on LeetCode; secured Global Rank 171 in CodeChef Long Challenge and Global Rank 202 in CodeChef Starters.',
  },
]

const intro = 'Certifications, leadership roles, hackathon wins, and competitive programming achievements.'

export default function DetailedAchievements() {
  return (
    <div className="detail-section-wrapper">
      <h2 className="detail-section-heading">Achievements and Leadership</h2>
      <p className="detail-section-intro">{intro}</p>
      <div className="detail-section-card">
        {achievements.map((item, index) => (
          <div key={index}>
            <div className="detail-entry">
              <div className="detail-entry-left">
                <h3 className="detail-entry-title">{item.title}</h3>
                <span className="detail-entry-role">{item.certificate}</span>
                {item.period && <span className="detail-date-pill">{item.period}</span>}
              </div>
              <div className="detail-entry-right">
                <h4 className="detail-entry-subtitle">Summary</h4>
                <p className="detail-entry-desc">{item.detail}</p>
              </div>
            </div>
            {index < achievements.length - 1 && <hr className="detail-entry-divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}
