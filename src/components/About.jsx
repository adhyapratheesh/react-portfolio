import './About.css'; 

const About = () => (
  <section className="intro-section" id="home">
    <div className="intro-container">
      <div className="profile-wrapper" style={{ marginLeft: '-2rem' }}>
        <img src="/profile-photo.png" alt="Adhya Pratheesh Profile" className="profile-pic" />
      </div>
      <div className="intro-text-wrapper">
        <h1>Hi!<br />I'm Adhya Pratheesh</h1>
        <p>
          Hello! I'm a passionate and driven B.Tech Computer Science Engineering graduate with a strong interest in
          software development, machine learning, and community engagement. Experienced in organizing tech events and
          fostering innovation. Seeking opportunities to apply technical skills and contribute to impactful projects
          in a dynamic environment focused on continuous learning and growth.
        </p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src="/github-icon.svg" alt="GitHub" />
          </a>
        </div>
        <a href="/Adhya-Pratheesh-RESUME.pdf" className="btn" download>Download Resume</a>
      </div>
    </div>
  </section>
);

export default About;
