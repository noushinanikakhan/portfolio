import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A curious mind moving from biotechnology to building things for the web.
        </p>
      </div>

      <div className="about-grid">
        {/* Left: main text */}
        <div className="about-text">
          <p>
            My journey started in biotechnology, where I learned to think
            analytically, solve complex problems, and work with data and
            systems. Over time, I realised I enjoy building digital products
            just as much as I enjoy scientific problem–solving, and began
            transitioning into web development.
          </p>

          <p>
            I am currently focused on the MERN stack, building responsive,
            user–friendly applications with React and modern JavaScript.
            I especially enjoy structuring clean components, designing simple
            and intuitive UIs, and connecting frontend interfaces with backend
            APIs.
          </p>

          <p>
            Outside of coding, I enjoy teaching and explaining concepts in a
            simple way, exploring new tech tools, and learning continuously.
            I&apos;m motivated by projects that have real impact, whether it&apos;s
            improving learning experiences, making data more accessible, or
            helping people interact with technology more comfortably.
          </p>

          <div className="about-pill-row">
            <span className="about-pill">Web Development</span>
            <span className="about-pill">MERN Stack</span>
            <span className="about-pill">Clean UI</span>
            <span className="about-pill">Problem Solving</span>
          </div>
        </div>

        {/* Right: quick facts card */}
        <aside className="about-side-card">
          <h3 className="about-side-title">Quick Highlights</h3>
          <ul className="about-side-list">
            <li>Transitioning from a strong science background to full–stack dev.</li>
            <li>Comfortable with React, JavaScript, and RESTful APIs.</li>
            <li>Interested in building tools for learning and productivity.</li>
            <li>Enjoys teaching, mentoring, and explaining technical topics.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default About;
