const achievements = [
  {
    title: 'Certification',
    description: 'AWS Certified Solutions Architect – Associate',
    year: '',
  },
  {
    title: 'Leadership',
    description: 'Senior Editor | Computer Society of India, Nirma University (2022 – 2023); Spearheaded campus-wide hackathons and technical workshops.',
    year: '',
  },
  {
    title: 'Hackathons',
    description: 'Earned 1st Place in the E-Cell Organized Hackathon at Nirma University.',
    year: '',
  },
]

export default function AchievementsCard() {
  return (
    <div className="card achievements-card">
      <h3 className="card-title">Achievements and Leadership</h3>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <span className="achievement-icon">★</span>
            <div className="achievement-content">
              <span className="achievement-title">{achievement.title}</span>
              <span className="achievement-desc">{achievement.description}</span>
              {achievement.year && <span className="achievement-year">{achievement.year}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
