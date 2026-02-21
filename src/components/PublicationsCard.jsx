const publications = [
  {
    title: 'MetaHate: AI-based hate speech detection for secured online gaming in metaverse using blockchain',
    venue: 'Security and Privacy in AI',
    year: '2024',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/spy2.343',
    image: `${import.meta.env.BASE_URL}metahate-logo.png`,
    imageAlt: 'MetaHate logo',
    description: 'MetaHate is an AI- and blockchain-powered framework designed to detect and prevent hate speech in metaverse gaming, improving moderation efficiency, community safety, and inclusivity in large-scale multiplayer environments. ',
  },
]

export default function PublicationsCard() {
  return (
    <div className="card publications-card">
      <h3 className="card-title">Publications</h3>
      <ul className="publications-list">
        {publications.map((pub, index) => (
          <li key={index} className="publication-item">
            {pub.image && (
              <div className="pub-image-wrap">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-image-link">
                    <img src={pub.image} alt={pub.imageAlt || pub.title} className="pub-image" />
                  </a>
                ) : (
                  <img src={pub.image} alt={pub.imageAlt || pub.title} className="pub-image" />
                )}
              </div>
            )}
            <div className="pub-content">
              {pub.link ? (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-title pub-title-link">
                  {pub.title}
                </a>
              ) : (
                <span className="pub-title">{pub.title}</span>
              )}
              <span className="pub-venue">{pub.venue} • {pub.year}</span>
              <p className="pub-description">{pub.description}</p>

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
