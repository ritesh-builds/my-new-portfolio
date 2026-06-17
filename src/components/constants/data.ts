// This file contains constants and data used across the portfolio template. 
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Ritesh Kumar",
  title: "Software Developer",
  location: "Karnal",
  email: "riteshpeepal@gmail.com",
  description: [
    "Hey there 👋, I'm Ritesh.",
    "I'm a B.Tech Computer Science student at UIET MDU Rohtak with a strong interest in Backend Development.",
    "I build secure and scalable applications using Java, Spring Boot, MongoDB, Redis, and modern web technologies.",
    "Currently, I'm improving my Data Structures & Algorithms skills while working on real-world projects.",
    "",
    ""
  ],
  profileImage: "/profile-image.webp", // Replace with your profile image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "ritesh-builds",
  leetcodeUsername: "", // remove or keep blank if you don't have a LeetCode profile
  hashnodeUsername: "", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/ritesh-builds",
  linkedin: "https://www.linkedin.com/in/ritesh-kumar-470307316/",
  twitter: "https://x.com/Code_By_Ritesh",
  leetcode: "https://leetcode.com/u/Ritesh_Kumar2414055/",
  peerlist: "", // remove or keep blank if you don't have a Peerlist profile
  instagram: "https://www.instagram.com/ritesh.build/",
  email: "riteshpeepal@gmail.com",
  blog: "", // remove if you don't have a blog
  resume: "https://your-resume-drive-link.com",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/meewdrzr";

export const SKILLS = { // Keep only the skills you want to showcase and remove the rest
  frontend: [
    "HTML", "CSS", "JavaScript", "React", "TailwindCSS",  
  ],
  backend: [
    "Node.js", "Express.js", "Spring Boot", 
  ],
  databases: [
    "MongoDB", "MySQL", "Redis"
  ],
  languages: [
    "C", "C++", "Java", "Python", "JavaScript", 
  ],
  // cloudDevOps: [
  //   "AWS", "Azure", "Docker", "Vercel", "Netlify", "Heroku", "GitHub Actions"
  // ],
  tools: [
    "VS Code", "Git", "GitHub", "GitLab", "Postman", "Figma", "Vite", "Linux", "Windows", "RequestKit", "Intellij Idea"
  ],
};

export const PROJECTS = [
  {
    name: "Journal-app",
    description: "A full-stack Journal Management System built with Java, Spring Boot, MongoDB, and React. The application enables users to securely create, update, and manage journal entries with JWT authentication, Spring Security, and Google OAuth2 login. It features role-based access control, allowing administrators to monitor all journal entries while users manage their own content. Additional functionalities include Redis caching for performance optimization, automated email scheduling, and real-time weather integration using external APIs.",
    tech: ["React", "TypeScript", "Redis", "GoogleOauth2", "Kafka", "SonarQube","Spring Security"," Weather API", "Email Schedulers", "MongoDB", "RestAPI", ],
    link: "https://yourproject1-link.com",
    github: "https://github.com/ritesh-builds/journalApp",
  },
  
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    company: "Personal Projects",
    companyLink: "https://companyname.com/",
    role: "Software Developer",
    period: "Jan 2025 - Present",
    location: "Remote/Location",
    description: "Built and maintained backend-focused personal projects using Java, Spring Boot, MongoDB, Redis, and Spring Security. Developed REST APIs, implemented JWT authentication, role-based access control, OAuth2 login, caching, and third-party API integrations. Worked on full-stack applications while primarily focusing on backend architecture and system design.",
    skills: ["Java", "Springboot", "MongoDB", "Redis", "Spring Security"],
  },
  // Add more experience as needed
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech) Computer Science and Engineering",
    institution: "University Institute of Engineering and Technology (UIET) Maharshi Dayanand University, Rohtak",
    institutionLink: "https://uietmdu.com/",
    period: "2024 - 2028",
    score: "DSA, OOP, DBMS",
  },
  // Add more education as needed
];