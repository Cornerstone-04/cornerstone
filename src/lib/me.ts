import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaXTwitter,
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
} from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { LuSearch } from "react-icons/lu";
import PlaywrightLogo from "../../public/icons/playwright-logo";
import { Testimonial } from "./types";

export const aboutMe = [
  {
    id: 1,
    text: "I've worked with startups and teams to build scalable, user-focused products using React, Next.js, TailwindCSS, and Git. What I enjoy most about frontend engineering is how it blends logic with creativity — every project is a puzzle waiting to be solved with code that not only works well but looks great.",
  },
  {
    id: 2,
    text: "My love for the web started young, fueled by curiosity about how websites actually worked. That curiosity turned into a drive to build interfaces that feel natural to use. One of my proudest moments was developing a web app for a masters student that was later selected among the best in her class.",
  },
  // {
  //   id: 3,
  //   text: "When I'm not coding, you'll probably find me watching Liverpool (YNWA), playing Scrabble (still undefeated), or listening to music while working through my next idea.",
  // },
  {
    id: 4,
    text: "So, if you're looking for a frontend developer who builds clean, scalable, and user-friendly experiences — let's create something great together.",
  },
];

export const timeline = [
  {
    startDate: "May 2024",
    endDate: "Oct 2024",
    position: "Frontend Engineering Intern",
    company: "Moniepoint Inc",
    url: "https://moniepoint.com/",
    logo: "/images/moniepoint.png",
    tools: ["ReactJS", "TypeScript", "NextJS", "Playwright", "Kamona UI"],
    summary:
      "Contributed to Kamona UI Library by implementing reusable components and ensuring design consistency across the frontend team. Built and executed Playwright test suites for Moniepoint FX, validating user flows and ensuring seamless experiences. Collaborated closely with designers on usability and accessibility standards, and reported/fixed bugs uncovered during testing.",
  },
  {
    startDate: "Nov 2023",
    endDate: "Apr 2024",
    position: "Frontend Engineer",
    company: "Pysis Technologies",
    url: "https://pysistech.com/",
    logo: "/images/fishdey.svg",
    tools: ["ReactJS", "Zustand", "TailwindCSS", "Axios", "REST APIs"],
    summary:
      "Built and maintained key modules such as store management, product categories, and user profiles using ReactJS + Zustand. Integrated REST APIs with Axios for seamless data flow, styled responsive interfaces with TailwindCSS, and debugged complex issues to improve stability. Contributed actively to code reviews and team discussions.",
  },
  {
    startDate: "Apr 2022",
    endDate: "Jun 2022",
    position: "Frontend Developer",
    company: "Stutern",
    url: "https://stutern.com/",
    logo: "/images/stutern.png",
    tools: ["HTML", "CSS", "Bulma.io", "Figma"],
    summary:
      "Led a complete overhaul of the main landing page with HTML and CSS. Redesigned the graduate accelerator page by integrating custom illustrations for accelerator tracks and updating curriculum content. Converted Figma mockups into functional, user-friendly pages, improving usability and clarity.",
  },
];

export const connect = [
  {
    social: "Email",
    url: "fortunecornerstone@gmail.com",
    icon: FaRegEnvelope,
  },
  {
    social: "Github",
    url: "github.com/Cornerstone-04",
    icon: FaGithub,
  },
  {
    social: "LinkedIn",
    url: "linkedin.com/in/cornerstone-ephraim",
    icon: FaLinkedin,
  },
  {
    social: "Twitter",
    url: "x.com/4th_ephraim",
    icon: FaXTwitter,
  },
];

export const menuitems = [
  {
    name: "Home",
    path: "/",
    delay: "150ms",
  },
  {
    name: "About",
    path: "/about",
    delay: "175ms",
  },
  {
    name: "Projects",
    path: "/projects",
    delay: "200ms",
  },
  {
    name: "Contact",
    path: "/contact",
    delay: "225ms",
  },
];

export const projects = [
  {
    title: "Shipped & Live",
    type: "shipped",
    works: [
      {
        title: "Laughter Ephraim",
        description:
          "A professional portfolio showcasing creative work and post-production expertise. Features fast loading times and seamless navigation across all devices, helping visitors quickly understand capabilities and view project highlights.",
        tech: ["Next.js", "TypeScript", "TailwindCSS"],
        repo: "https://github.com/Cornerstone-04/laughter-portfolio",
        image: "/images/projects/laughter.png",
        gif: "",
        url: "https://laughterephraim.vercel.app/",
      },
      {
        title: "Power Safety Boots",
        description:
          "An e-commerce platform for industrial safety footwear with organized product categories, detailed specifications, and image galleries. Guides customers from product discovery to purchase with clear calls-to-action while ensuring easy search engine visibility.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "SEO"],
        repo: "https://github.com/Cornerstone-04/powerbooth",
        image: "/images/projects/pb-logo.png",
        gif: "",
        url: "https://www.powersafetyboots.com/",
      },
      {
        title: "CertifyChain",
        description:
          "A blockchain-based platform for secure certificate verification. Users can upload certificates, verify authenticity instantly, and maintain complete verification history. Eliminates certificate fraud by providing tamper-proof verification for employers, universities, and certification bodies.",
        tech: [
          "React",
          "TypeScript",
          "Zustand",
          "ShadCN",
          "TailwindCSS",
          "IPFS (Helia)",
          "REST APIs",
        ],
        repo: "https://github.com/Cornerstone-04/certifychain-fe",
        image: "/images/projects/certifychain.png",
        gif: "",
        url: "https://certifychain-fe.vercel.app/",
      },
      {
        title: "PeerShelf v1",
        description:
          "A student platform for sharing academic resources within university communities. Students create profiles, upload study materials, request resources, and download peer-shared content. Version 2 (in development) adds real-time messaging and notifications for better collaboration.",
        tech: ["React", "Firebase Auth/Storage", "Responsive UI", "Cypress"],
        repo: "https://github.com/Cornerstone-04/peershelf-fe/",
        image: "/images/projects/peershelf.png",
        gif: "",
        url: "https://peershelf.vercel.app/",
      },
    ],
  },
  {
    title: "In the Lab",
    type: "building",
    works: [
      {
        title: "Forever Ephraim",
        description:
          "A content portfolio for a writer and product marketer, consolidating articles, case studies, and thought leadership pieces. Automatically syncs with external blogs to showcase the latest content and establish credibility with clients and employers.",
        tech: ["Next.js", "TailwindCSS", "SubstackRSS", "ShadCN UI"],
        repo: "",
        image: "/images/projects/forever.png",
        gif: "",
        url: "",
      },
      {
        title: "TixCore",
        description:
          "An event management solution simplifying ticket sales for organizers and purchasing for attendees. Organizers can set up events, manage inventory, and track sales in real-time. Attendees get smooth booking with instant confirmations and secure payments.",
        tech: ["Next.js", "Node.js", "TailwindCSS", "Zustand", "Axios"],
        repo: "",
        image: "/images/projects/tixcore.png",
        gif: "",
        url: "",
      },
      {
        title: "TextMi",
        description:
          "A streamlined messaging app designed for users who value simplicity and speed. Eliminates unnecessary features to focus on core messaging with fast delivery and minimal distractions. Secure authentication protects privacy while maintaining ease of access.",
        tech: ["Next.js", "TypeScript", "Zustand", "TailwindCSS", "Supabase"],
        repo: "",
        image: "/images/projects/textmi.png",
        gif: "",
        url: "",
      },
      {
        title: "PeerShelf v2",
        description:
          "An enhanced academic resource-sharing platform with improved collaboration features. Beyond file sharing, students can now communicate through integrated chat, receive instant notifications for requested resources, and track community contributions. Scales to support larger student populations.",
        tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Zustand"],
        repo: "",
        image: "/images/projects/peershelf.png",
        gif: "",
        url: "",
      },
    ],
  },
];

export type ProjectTypes = "shipped" | "building";

export const technologies = [
  { name: "HTML", icon: FaHtml5, color: "from-orange-500 to-red-500" },
  { name: "CSS", icon: FaCss3, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: FaJs, color: "from-yellow-500 to-orange-500" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-500 to-blue-700",
  },
  { name: "React.js", icon: FaReact, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: RiNextjsFill, color: "from-gray-900 to-gray-700" },
  {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "from-teal-500 to-cyan-500",
  },
  { name: "Sass", icon: FaSass, color: "from-pink-500 to-rose-500" },

  {
    name: "Playwright",
    icon: PlaywrightLogo,
    color: "from-green-600 to-orange-500",
  },
  { name: "SEO", icon: LuSearch, color: "from-purple-500 to-indigo-600" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Laughter Ephraim",
    role: "Film Editor",
    company: "Blink Studios",
    content:
      "Cornerstone is an exceptional frontend engineer. His attention to detail and ability to translate complex designs into pixel-perfect implementations is outstanding. He consistently delivers high-quality work on time.",
  },
  {
    name: "Olusegun Joe-Alabi",
    role: "Founder",
    company: "Makkan Innovation",
    content:
      "Cornerstone is a talented frontend developer with great attention to detail and a strong sense of design. It's always a pleasure working with him.",
  },
  {
    name: "Oluwatobi Abayomi",
    role: "Software Developer",
    company: "Datalytix",
    content:
      "As someone who has worked with Cornerstone before, I can say he is a very delightful person to work with. His meticulousness and attention to detail means he always does a thorough job, he writes clean and intuitive code that is easy to pick up and his penchant for staying up to date with new technologies and best practices means there is always something to learn from him. Overall, I'll recommend working with Cornerstone.",
  },
];
