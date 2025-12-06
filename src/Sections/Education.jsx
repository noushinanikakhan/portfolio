import React from "react";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Formal academic background beyond higher secondary level.
        </p>
      </div>

      <div className="education-grid">
        <div className="edu-card">
          <div className="edu-header">
            <h3 className="edu-degree">MSc in Biotechnology</h3>
            <span className="edu-year">Bangladesh · 2022</span>
          </div>
          <p className="edu-institution">Bangladesh Agricultural University</p>
          <p className="edu-description">
            Developed strong foundations in experimental design, data analysis,
            and scientific communication, which now support my problem–solving
            in software development.
          </p>
        </div>

        <div className="edu-card">
          <div className="edu-header">
            <h3 className="edu-degree">
              BSc in Biotechnology &amp; Genetic Engineering
            </h3>
            <span className="edu-year">Bangladesh · 2020</span>
          </div>
          <p className="edu-institution">
            Sylhet Agricultural University
          </p>
          <p className="edu-description">
            Built a strong analytical mindset and ability to work with complex
            systems, which helps me learn new technologies and frameworks
            quickly as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
