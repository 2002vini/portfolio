import ExperienceRoadmap from './ExperienceRoadmap'
import CertificationCard from './CertificationCard'
import ProblemSolvingCard from './ProblemSolvingCard'
import PublicationsCard from './PublicationsCard'
import AchievementsCard from './AchievementsCard'
import AboutMe from './AboutMe'
import SkillsSlider from './SkillsSlider'
import DetailedExperience from './DetailedExperience'
import DetailedProjects from './DetailedProjects'
import DetailedAchievements from './DetailedAchievements'
import GetInTouch from './GetInTouch'

export default function RightContent() {
  return (
    <main className="right-content">
      <section id="hero" className="hero-section">
        <div className="hero-text">
          <h1 className="hero-greeting">I'm Vini Hundlani</h1>
          <h2 className="hero-title">Backend Engineer</h2>
          <p className="hero-desc">
            Passionate about building scalable systems. I design and implement robust APIs,
            optimize databases, and architect microservices that scale.
          </p>
          <a href="#contact" className="btn btn-primary">HIRE ME →</a>
        </div>
        <div className="hero-illustration-wrap">
          <img
            src="/banner.jpeg"
            alt=""
            className="hero-illustration bounce-translation"
          />
        </div>
      </section>
      {/* <section id="experience-roadmap" className="experience-roadmap-wrapper">
        <ExperienceRoadmap />
      </section> */}
      <div className="cards-grid" id="certifications">
        <CertificationCard />
        <ProblemSolvingCard />
      </div>
      <div className="cards-grid">
        <PublicationsCard />
        <AchievementsCard />
      </div>
      <div className="detail-sections">
        <section id="about"><AboutMe /></section>
        <SkillsSlider />
        <section id="experience"><DetailedExperience /></section>
        <section id="projects"><DetailedProjects /></section>
        {/* <section id="achievements"><DetailedAchievements /></section> */}
      </div>
      <GetInTouch />
    </main>
  )
}
