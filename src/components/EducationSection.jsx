const education = [
  { degree: 'B.Tech in CSE', place: 'Nirma University', period: '2020-2024', score: '8.14 CGPA' },
  { degree: 'Senior Secondary', place: 'Delhi Public School Bopal', period: '', score: '93.4%' },
  { degree: 'Higher Secondary', place: 'Delhi Public School Bopal', period: '', score: '96%' },
]

export default function EducationSection() {
  return (
    <div className="card education-card">
      <h3 className="card-title">Education</h3>
      <ul className="education-list">
        {education.map((item, index) => (
          <li key={index} className="education-item">
            <div className="education-degree">{item.degree}</div>
            <div className="education-place">{item.place}{item.period && ` (${item.period})`}</div>
            <div className="education-score">{item.score}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
