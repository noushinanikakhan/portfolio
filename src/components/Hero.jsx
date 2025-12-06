import React from "react";
import profileImg from "../assets/Noushin.jpg"; // Use an actual image with this name later

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Left side: text */}
        <div>
          <p className="hero-tag">Portfolio / Developer Profile</p>

          <h1 className="hero-title">
            Hi, I&apos;m <span>Noushin Anika Khan</span>
          </h1>

          <p className="hero-subtitle">Web Developer & MERN Learner</p>

          <p className="hero-text">
            I am a passionate web developer in transition from a biotechnology
            background, currently focused on building modern, responsive
            applications with React and the MERN stack. I enjoy crafting clean
            user interfaces and solving real-world problems through code.
          </p>

          <div className="hero-buttons">
            <a
              href="/Noushin_Resume.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/noushinanikakhan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/noushin-anika-khan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right side: profile card */}
        <div className="hero-right">
          <div className="profile-card">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                <img src={profileImg} alt="Profile" />
              </div>
            </div>
            <h2 className="profile-title">MERN Stack Enthusiast</h2>
            <p className="profile-text">
              Open to web development internships, junior roles, and remote
              project collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
