export const portfolioData = {
  personalInfo: {
    name: "Noushin Anika Khan",
    designation: "Full Stack (MERN) Developer",
    description: "A passionate developer transitioning from biotechnology to software engineering...",
    profileImage: "/profile.jpg",
    resumeLink: "/Noushin_Resume.pdf",
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/noushinanikakhan" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/noushin-anika-khan" },
  ],

  skills: {
    frontend: ["React", "JavaScript", "Tailwind CSS", "DaisyUI", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
  },

  education: [
    {
      degree: "MSc in Biotechnology",
      institution: "Bangladesh Agricultural University",
      year: "2022",
    },
    {
      degree: "BSc in Biotechnology & Genetic Engineering",
      institution: "Sylhet Agricultural University",
      year: "2020",
    },
  ],

  experience: [
    {
      role: "Product Development Executive",
      company: "EdTech Solutions",
      period: "Feb 2024 – Present",
      details: [
        "Developing STEM learning materials",
        "Creating scripts and digital content for e-learning",
      ],
    },
    {
      role: "Science Teacher",
      company: "Forest Hill School",
      period: "Jan 2021 – Jul 2023",
      details: ["Teaching science to secondary students", "Curriculum development"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "PlateShare",
      image: "/assets/projects/plateshare.png",
      shortDescription: "A food donation platform connecting donors and receivers.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/noushinanikakhan/Assignment10-PlateShare-server",
      challenges: [
        "Implementing role-based authentication",
        "Handling image uploads",
      ],
      futureImprovements: ["Add chat feature", "Improve UI responsiveness"],
    },
    // Add at least 3 projects
  ],
};
