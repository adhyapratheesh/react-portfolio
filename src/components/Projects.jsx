import './Projects.css'; 

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-container">
      <div className="project-card">
          <h3>Travel Guide Website</h3>
          <p>A personalized Kerala travel planner with filters and smart itineraries using React and Gemini API.</p>
      </div>

      <div className="project-card">
          <h3>SkillSync</h3>
          <p>Automated team formation platform using Django, PostgreSQL, and ML for smart project allocation.</p>
        </div>

      <div className="project-card">
          <h3>Movie Recommendation System</h3>
          <p>An ML-based movie recommender using content filtering and user preferences.</p>
        </div>
        
      </div>
  </section>
);

export default Projects;
