const landmarks = [
  {title:'Senior Editor @ CSI Nirma University', role: 'Full Time', duration: '1 year', year: '2022' },
  { title: 'Madhyam Impact Foundation', role: 'Internship', duration: '3 months', year: '2023' },
  { title: 'Crest Data', role: 'Internship', duration: '6 months', year: '2023-2024' },
  { title: 'Crest Data', role: 'Full Time', duration: 'Present', year: '2024' },
]

export default function ExperienceRoadmap() {
  return (
    <div className="card experience-roadmap-card experience-roadmap-horizontal">
      <h3 className="card-title">Experience Roadmap</h3>
      <div className="roadmap-horizontal">
        <div className="roadmap-pins">
        <div className="roadmap-track" />

          {landmarks.map((landmark, index) => (
            <div key={index} className="roadmap-pin-wrapper">
              <div className="roadmap-pin">
                <span className="roadmap-pin-number">{index + 1}</span>
              </div>
              <div className="roadmap-pin-content">
                <span className="landmark-role">{landmark.role}</span>
                <span className="landmark-title">{landmark.title}</span>
                <span className="landmark-duration">{landmark.duration}{landmark.year && ` • ${landmark.year}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
