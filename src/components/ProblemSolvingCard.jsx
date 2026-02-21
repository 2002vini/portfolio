const problemStats = [
  { label: 'LeetCode', solved: 692, total: 927, color: 'var(--easy-color)', url: 'https://leetcode.com/u/vini2002/' },
  { label: 'Codeforces', solved: 742, total: 2010, color: 'var(--medium-color)', url: 'https://codeforces.com/profile/vh1' },
  { label: 'Others', solved: 385, total: 909, color: 'var(--hard-color)', url: '#' },
]

const totalSolved = problemStats.reduce((sum, s) => sum + s.solved, 0)

function PieChart() {
  const radius = 70
  const circumference = 2 * Math.PI * radius
  let cumulative = 0

  const segments = problemStats.map((stat, i) => {
    const fraction = stat.solved / totalSolved
    const strokeDasharray = `${fraction * circumference} ${circumference}`
    const strokeDashoffset = -cumulative * circumference
    cumulative += fraction

    return (
      <circle
        key={i}
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke={stat.color}
        strokeWidth="24"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 100 100)"
      />
    )
  })

  return (
    <svg viewBox="0 0 200 200" className="pie-chart-svg">
      {segments}
      <circle cx="100" cy="100" r="50" fill="var(--bg-card)" />
      <text x="100" y="95" textAnchor="middle" className="pie-center-main">{totalSolved}</text>
      <text x="100" y="112" textAnchor="middle" className="pie-center-sub">Solved</text>
    </svg>
  )
}

export default function ProblemSolvingCard() {
  return (
    <div className="card problem-solving-card">
      <h3 className="card-title">Problem Solving</h3>
      <div className="problem-solving-content">
        <div className="pie-chart-wrapper">
          <PieChart />
        </div>
        <div className="difficulty-breakdown">
          {problemStats.map((stat, index) => (
            <div key={index} className="difficulty-item" style={{ '--diff-color': stat.color }}>
              {stat.url ? (
                <a href={stat.url} target="_blank" rel="noopener noreferrer" className="diff-label diff-label-link">
                  {stat.label}
                </a>
              ) : (
                <span className="diff-label">{stat.label}</span>
              )}
              <span className="diff-count">{stat.solved}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
