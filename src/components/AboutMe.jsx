const intro = 'A brief overview of my background and what drives my work in software engineering.'

export default function AboutMe() {
  return (
    <div className="detail-section-wrapper">
      <h2 className="detail-section-heading">About Me</h2>
      <p className="detail-section-intro">{intro}</p>
      <div className="detail-section-card">
        <div className="detail-entry">
          <div className="detail-entry-left">
          <img src="/about_me.jpg" alt="Me" className="detail-entry-image" />
          </div>
          <div className="detail-entry-right">
            <p className="detail-entry-desc">
            Software Developer with a strong foundation in backend development and a keen interest in cloud architecture and distributed systems. Proficient in C/C++, Go, and Python, with experience in Generative AI development, including hands-on experience with LLM applications, Retrieval-Augmented Generation (RAG), LangChain orchestration, and OpenAI API integration.
            </p>
            <p className="detail-entry-desc">
            Proven track record of delivering end-to-end scalable solutions, including an AI-driven automation system that reduced manual effort by 85%, significantly improving efficiency and response time. Passionate about solving complex real-world problems through performance optimization, data-driven engineering, and robust backend architecture
            </p>
          
          </div>
        </div>
      </div>
    </div>
  )
}
