import React, { useState } from "react";

const projects = [
  {
    id: "ocean-academy",
    name: "Ocean Academy",
    image: "https://via.placeholder.com/400x250?text=Ocean+Academy", // replace with real screenshot later
    shortDescription:
      "A full-stack e-learning platform built entirely with Next.js 16, featuring courses, authentication, and course CRUD via API routes.",
    techStack: [
      "Next.js 16",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "NextAuth.js",
      "Vercel",
    ],
    liveUrl: "#", // TODO: add your real live link here
    githubUrl: "#", // TODO: add your GitHub repo link
    challenges: [
      "Designing the course CRUD logic using only Next.js API routes without a separate backend server.",
      "Integrating NextAuth.js for both Google OAuth and credential-based authentication while keeping routes protected.",
      "Maintaining a consistent UI across dynamic pages like course lists and course details.",
    ],
    improvements: [
      "Add a student dashboard with progress tracking and completion status.",
      "Implement role-based access for admins, instructors, and students.",
      "Integrate analytics to monitor course engagement and completion rates.",
    ],
  },
  {
    id: "plateshare",
    name: "PlateShare – Community Food-Sharing App",
    image: "https://via.placeholder.com/400x250?text=PlateShare", // replace with real screenshot later
    shortDescription:
      "A MERN-based platform connecting food donors with people in need to reduce food waste and support community sharing.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "#", // TODO: add live link if deployed
    githubUrl:
      "https://github.com/noushinanikakhan/Assignment10-PlateShare-server", // or client repo when ready
    challenges: [
      "Designing user flows for posting, browsing, and managing donation listings across frontend and backend.",
      "Handling CRUD operations securely for food posts while keeping the UI simple for non-technical users.",
      "Coordinating communication between frontend React components and Express.js API endpoints.",
    ],
    improvements: [
      "Add user authentication with separate dashboards for donors and receivers.",
      "Implement real-time notifications for new or updated donations.",
      "Introduce location-based filtering so users can find nearby food posts.",
    ],
  },
  {
    id: "skillswap",
    name: "SkillSwap – Local Skill Exchange Platform",
    image: "https://via.placeholder.com/400x250?text=SkillSwap", // replace with real screenshot later
    shortDescription:
      "An interactive platform where people can exchange skills like coding, music, languages, and more within their local community.",
    techStack: [
      "React",
      "React Router",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
      "AOS",
      "Swiper.js",
      "React Toastify",
      "Vite",
    ],
    liveUrl: "https://ph-assignment-09-skillswap.web.app/",
    githubUrl:
      "https://github.com/programming-hero-web-course2/b12-a9-firesheild-noushinanikakhan",
    challenges: [
      "Implementing secure authentication with email/password and Google login using Firebase.",
      "Managing protected routes so only logged-in users can access booking and profile-related pages.",
      "Coordinating animations (AOS, Animate.css, Swiper) without hurting performance or responsiveness.",
    ],
    improvements: [
      "Add real-time messaging between learners and skill providers.",
      "Introduce reviews, ratings, and a reputation system for skill providers.",
      "Support payments or credits for premium sessions and advanced features.",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Some of the projects I&apos;ve built while learning full-stack web development.
        </p>
      </div>

      {/* Project cards */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-body">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.shortDescription}</p>

              <div className="project-tags">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => openDetails(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Detail modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeDetails}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-header">
              <div>
                <h3 className="project-modal-title">
                  {selectedProject.name}
                </h3>
                <div className="project-modal-tech">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="project-modal-tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="project-modal-close"
                onClick={closeDetails}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div>
              <h4 className="project-modal-section-title">Overview</h4>
              <p className="project-modal-text">
                {selectedProject.shortDescription}
              </p>
            </div>

            <div>
              <h4 className="project-modal-section-title">Challenges</h4>
              <ul className="project-modal-list">
                {selectedProject.challenges.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="project-modal-section-title">
                Future Improvements
              </h4>
              <ul className="project-modal-list">
                {selectedProject.improvements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-modal-links">
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Project
                </a>
              )}
              {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
