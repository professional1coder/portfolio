import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  tailwind,
  mongodb,
  network,
  system,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Expert",

    icon: web,
  },
  {
    title: "Network Engineer",
    icon: mobile,
  },
  {
    title: "Freelance Developer",
    icon: backend,
  },
  {
    title: "System Adminstrator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "network",
    icon: network,
  },
  {
    name: "system",
    icon: system,
  },
];

const experiences = [
  {
    title: "SSC",
    company_name: "Dr Antonio Da Silva High School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2005 - june 2018",
    points: [
      "Completed my School from Dr Antonio Da Silva High School in 2018 with 80 %",
    ],
  },
  {
    title: "HSC ",
    company_name: "Mahatma Phule Education Society",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Agust 2018 - June 2020",
    points: [
      "Completed my HSC from Mahatma Phule Education Society in 2020 with 71 %",
      "Done my HSC in Computer Science Specialization"
    ],
  },
  {
    title: "Bachelor's Degree in Information Technology",
    company_name: "Guru Nanak Khalsa College Of Arts Science and Commerce",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2020 - May 2023",
    points: [
       "Completed my Bachelor's Degree in IT  from Guru Nanak Khalsa College Of Arts Science and Commerce in 2023 with 95 %",
      "Done Certifications in Python CyberSecurity and Ethical Hacking",
      "On-going Certification In Cloud Security and Data Managment"
      
       ],
  },
  {
    title: "Master's Degree In CyberSecurity",
    company_name: "Guru Nanak Khalsa College Of Arts Science and Commerce",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Agust 2023 - Present",
    points: [
      "Pursuing my Master's Degree in CyberSecurity from Khalsa College",
      "Doing Internship with V4WEB CyberSecurity in Digital Forensic Investigation",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Chinmay proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chinmay does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Chinmay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Web-based platform where all my carrer info is written i.e. BIO-DATA",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
