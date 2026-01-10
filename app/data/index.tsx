import {
  FaUser,
  FaProjectDiagram,
  FaCommentDots,
  FaEnvelope,
} from "react-icons/fa";
import { JSX } from "react";

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const workExperiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description:
      "Led development of modern web applications using React and Next.js",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    location: "Remote",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built scalable web solutions for various clients",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
    location: "Jakarta, ID",
  },
];

export const organizations = [
  {
    id: 1,
    role: "Tech Lead",
    organization: "Developer Community",
    period: "2021 - Present",
    description: "Organized workshops and mentored junior developers",
    impact: "500+ members",
  },
  {
    id: 2,
    role: "Committee Member",
    organization: "Open Source Initiative",
    period: "2020 - 2021",
    description: "Contributed to open source projects and community growth",
    impact: "1000+ contributors",
  },
];

export const certificates = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-12345",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 2,
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2022",
    credentialId: "PSM-67890",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    name: "React Advanced Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-11223",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Google UX Design Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "GOOGLE-44556",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export const navItems: NavItem[] = [
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  // { name: "Testimonials", link: "#testimonials", icon: <FaCommentDots /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "KALCER — AI Time Management App",
    des: "Kalana is a smart time-management web app that uses AI to understand goals written in natural language and automatically break them down into scheduled action steps based on the user’s availability",
    img: "/KALANA.png",
    iconLists: [
      "nextjs-icon-svgrepo-com.svg",
      "/tail.svg",
      "/stream.svg",
      "figma-svgrepo-com.svg",
      "nextauth.svg",
      "light-prisma-svgrepo-com.svg",
      "supabase-logo-icon.png",
    ],
    link: "https://dribbble.com/shots/26843000-Scheduler-and-Time-Management-Web-App-Powered-By-AI",
  },
  {
    id: 2,
    title: "Munky Monkey - NFT Marketplace",
    des: "Munky Monkey is a digital token whose ownership is recorded on the blockchain. Munky can be used for other things such as breeding, taking genes, being traded, etc.",
    img: "/Image.png",
    iconLists: ["figma-svgrepo-com.svg"],
    link: "http://dribbble.com/shots/24128653-NFT-Web-Design",
  },
  {
    id: 3,
    title: "Tani Pedia",
    des: "Web-based platform designed to provide information and services for the agricultural community",
    img: "/Tani-Pedia.jpg",
    iconLists: [
      "laravel-svgrepo-com.svg",
      "figma-svgrepo-com.svg",
      "xampp-svgrepo-com.svg",
      "bootstrap-svgrepo-com.svg",
    ],
    link: "https://dribbble.com/shots/26943340-Tani-Pedia-Agricultural-Website",
  },
  {
    id: 4,
    title: "Plant Product Catalog Website Called Pot",
    des: "A product gallery that presents premium indoor plants with clear visuals and structured information. Users can explore by plant type, sort products, and find what fits their home aesthetic — all through a simple and user-friendly interface.",
    img: "Portfolio-mockup.png",
    iconLists: ["figma-svgrepo-com.svg"],
    link: "https://dribbble.com/shots/26842693-Plant-Product-Catalog-Website-Called-Pot",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Application Developer Internship",
    desc: "Assisted in the development of a web-based platform using Laravel.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Application Developer",
    desc: "Designed and developed Web app using React, Laravel, and Next.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance UI UX Desaigner",
    desc: "Designed and developed UI/UX for a client, from initial concept.",
    className: "md:col-span-3", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dewianaaryani",
  },
  {
    id: 2,
    img: "/dribbble-brands-solid-full.svg",
    link: "https://dribbble.com/dewianaaryani",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dewianaaryani/",
  },
];
