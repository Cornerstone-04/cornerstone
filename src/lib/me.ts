import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

export const timeline = [
  {
    startDate: "May 2024",
    endDate: "Oct 2024",
    position: "Frontend Engineering Intern",
    company: "Moniepoint Inc",
    url: "https://moniepoint.com/", // PUT COMPANY LINK HERE
    logo: "/images/moniepoint.png", // PUT COMPANY LOGO HERE
    tools: ["ReactJS", "TypeScript", "NextJS", "Playwright", "Kamona UI"],
    summary:
      "Contributed to Kamona UI Library by implementing reusable components and ensuring design consistency across the frontend team. Built and executed Playwright test suites for Moniepoint FX, validating user flows and ensuring seamless experiences. Collaborated closely with designers on usability and accessibility standards, and reported/fixed bugs uncovered during testing.",
  },
  {
    startDate: "Nov 2023",
    endDate: "Apr 2024",
    position: "Frontend Engineer",
    company: "Pysis Technologies",
    url: "https://pysistech.com/", // PUT COMPANY LINK HERE
    logo: "/images/fishdey.svg", // PUT COMPANY LOGO HERE
    tools: ["ReactJS", "Zustand", "TailwindCSS", "Axios", "REST APIs"],
    summary:
      "Built and maintained key modules such as store management, product categories, and user profiles using ReactJS + Zustand. Integrated REST APIs with Axios for seamless data flow, styled responsive interfaces with TailwindCSS, and debugged complex issues to improve stability. Contributed actively to code reviews and team discussions.",
  },
  {
    startDate: "Apr 2022",
    endDate: "Jun 2022",
    position: "Frontend Developer",
    company: "Stutern",
    url: "https://stutern.com/", // PUT COMPANY LINK HERE
    logo: "/images/stutern.png", // PUT COMPANY LOGO HERE
    tools: ["HTML", "CSS", "Bulma.io", "Figma"],
    summary:
      "Led a complete overhaul of the main landing page with HTML and CSS. Redesigned the graduate accelerator page by integrating custom illustrations for accelerator tracks and updating curriculum content. Converted Figma mockups into functional, user-friendly pages, improving usability and clarity.",
  },
];

export const connect = [
  {
    social: "LinkedIn",
    url: "linkedin.com/in/cornerstone-ephraim",
    icon: FaLinkedin,
  },
  {
    social: "Github",
    url: "github.com/Cornerstone-04",
    icon: FaGithub,
  },
  {
    social: "Email",
    url: "fortunecornerstone@gmail.com",
    icon: FaRegEnvelope,
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
        title: "Laughter Ephraim — Portfolio",
        description:
          "Portfolio site built with Next.js focusing on performance, responsive UI, and showcasing post-production work.",
        tech: ["Next.js", "TypeScript", "TailwindCSS"],
        repo: "https://github.com/Cornerstone-04/laughter-portfolio", // PUT REPO LINK HERE (if public)
        image: "/images/projects/laughter.png", // PUT IMAGE HERE
        gif: "", // OPTIONAL
        url: "https://laughterephraim.vercel.app/",
      },
      {
        title: "Power Safety Boots",
        description:
          "Product website with multi-tab catalog, dynamic galleries, and CTAs. Modular components, smooth animations, and SEO-focused metadata.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "SEO"],
        repo: "https://github.com/Cornerstone-04/powerbooth",
        image: "/images/projects/pb-logo.png",
        gif: "",
        url: "https://www.powersafetyboots.com/",
      },
      {
        title: "CertifyChain — Blockchain Certification System",
        description:
          "Responsive frontend for decentralized certificate verification with tabbed UX, animations, uploads, and verification history.",
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
        url: "https://labeeb-fe.vercel.app/",
      },
      {
        title: "PeerShelf v1",
        description:
          "v1 with React + Firebase for auth, profiles, uploads, and downloads; redesigning v2 on a .NET backend for chat and real-time notifications.",
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
        title: "Forever Ephraim — Portfolio",
        description:
          "Writer and product marketer portfolio with blog integration and Substack RSS feed support.",
        tech: ["Next.js", "TailwindCSS", "SubstackRSS", "ShadCN UI"],
        repo: "",
        image: "/images/projects/forever.png",
        gif: "",
        url: "",
      },
      {
        title: "TixCore",
        description:
          "Ticketing platform for event organizers and attendees, supporting booking, payments, and real-time updates.",
        tech: ["Next.js", "Node.js", "TailwindCSS", "Zustand", "Axios"],
        repo: "",
        image: "/images/projects/tixcore.png",
        gif: "",
        url: "",
      },
      {
        title: "TextMi",
        description:
          "Minimalist texting application with a focus on speed, simplicity, and modern authentication.",
        tech: ["Next.js", "TypeScript", "Zustand", "TailwindCSS", "Supabase"],
        repo: "",
        image: "/images/projects/textmi.png",
        gif: "",
        url: "",
      },
      {
        title: "PeerShelf v2",
        description:
          "Rebuilt version of PeerShelf with .NET backend, real-time notifications, and expanded features.",
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
