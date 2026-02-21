export default function ProfileSection() {
  return (
    <div className="card profile-card">
      <div className="profile-image-container">
        <img 
          src="/profile.jpg" 
          alt="Vini Hundlani" 
          className="profile-image"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="profile-image-placeholder" style={{ display: 'none' }}>
         <img src="/profile.JPG" alt="Vini Hundlani" className="profile-image" />
        </div>
      </div>
      <h1 className="profile-name">Vini Hundlani</h1>
      <p className="profile-title">Backend engineer | passionate about building scalable systems</p>
    </div>
  )
}
