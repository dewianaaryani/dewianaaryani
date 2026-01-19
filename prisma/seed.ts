import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice Johnson",
    email: "alice@prisma.io",
    password: "hashed_password_here", // In real app, use proper hashing
    role: "owner",
    emailVerified: new Date(),
    image: "https://example.com/alice.jpg",
    company: "Tech Corp",
    jobTitle: "Senior Developer",
    knowMeFrom: "LinkedIn",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    password: "hashed_password_here",
    role: "visitor",
    emailVerified: new Date(),
    image: "https://example.com/bob.jpg",
    company: "Web Solutions",
    jobTitle: "Frontend Developer",
    knowMeFrom: "Conference",
  },
];

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: "KALCER — AI Time Management App",
    description: "Kalana is a smart time-management web app that uses AI to understand goals written in natural language and automatically break them down into scheduled action steps based on the user's availability.",
    thumbnail: "kalana.png",
    githubRepoLink: "https://github.com/dewianaaryani/scheduler-ai",
    liveDemoLink: "https://kalcer-demo.vercel.app",
    iconLists: ["uml.png", "git.svg", "nextjs.svg", "tailwindcss.svg", "stream.svg", "figma.svg", "nextauth.svg", "prisma.svg", "supabase.svg"],
    selected: true,
  },
  {
    name: "Munky Monkey - NFT Marketplace",
    description: "Munky Monkey is a digital token whose ownership is recorded on the blockchain. Munky can be used for other things such as breeding, taking genes, being traded, etc.",
    thumbnail: "monkey-munky.png",
    githubRepoLink: "",
    liveDemoLink: "https://dribbble.com/shots/26843000-Scheduler-and-Time-Management-Web-App-Powered-By-AI",
    iconLists: ["figma.svg"],
    selected: true,
  },
  {
    name: "Tani Pedia",
    description: "Web-based platform designed to provide information and services for the agricultural community.",
    thumbnail: "tani-pedia.jpg",
    githubRepoLink: "",
    liveDemoLink: "https://dribbble.com/shots/26943340-Tani-Pedia-Agricultural-Website",
    iconLists: ["uml.png","git.svg","laravel.svg", "figma.svg", "xampp.svg", "bootstrap.svg", "hostinger.svg", "ms-word.png"],
    selected: true,
  },
  {
    name: "Plant Product Catalog Website Called Pot",
    description: "A product gallery that presents premium indoor plants with clear visuals and structured information. Users can explore by plant type, sort products, and find what fits their home aesthetic — all through a simple and user-friendly interface.",
    thumbnail: "pot.png",
    githubRepoLink: "",
    liveDemoLink: "https://dribbble.com/shots/26842693-Plant-Product-Catalog-Website-Called-Pot",
    iconLists: ["figma.svg"],
    selected: true,
  },
];


const articleData: Prisma.ArticleCreateInput[] = [
  {
    title: "Getting Started with Prisma",
    content: "Prisma is a next-generation ORM for Node.js and TypeScript...",
    image: ["/articles/prisma-1.jpg", "/articles/prisma-2.jpg"],
    published: true,
  },
  {
    title: "Building Scalable APIs with GraphQL",
    content: "GraphQL provides a flexible approach to building APIs...",
    image: ["/articles/graphql-1.jpg"],
    published: false,
  },
];

const gridItemsData: Prisma.GridItemsCreateInput[] = [
  {
    title: "Project Management",
    description: "Efficient project planning and tracking",
    className: "col-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "text-xl font-bold",
    img: "/grid/project-management.jpg",
    spareImg: "/grid/project-management-alt.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    className: "col-span-1",
    imgClassName: "w-3/4 h-3/4",
    titleClassName: "text-lg font-semibold",
    img: "/grid/ui-ux.jpg",
  },
];

const educationData: Prisma.EducationCreateInput[] = [
  {
    name: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2020-05-31"),
  },
  {
    name: "MIT",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    startDate: new Date("2014-09-01"),
    endDate: new Date("2018-05-31"),
  },
];

const certificateData: Prisma.CertificateCreateInput[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: new Date("2022-03-15"),
    validity: "limited",
    expireDate: new Date("2025-03-15"),
    image: "/certs/aws-sa.jpg",
    url: "https://aws.amazon.com/certification/",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google",
    issueDate: new Date("2021-11-20"),
    validity: "limited",
    expireDate: new Date("2024-11-20"),
    image: "/certs/gcp-dev.jpg",
    url: "https://cloud.google.com/certification",
  },
];

const dashboardSelectionData: Prisma.DashboardSelectionCreateInput[] = [
  {
    name: "Dark Mode",
    selected: true,
  },
  {
    name: "Notifications",
    selected: false,
  },
  {
    name: "Sidebar Collapsed",
    selected: true,
  },
];

const workExperienceData: Prisma.WorkExperienceCreateInput[] = [
  {
     role: "UI/UX Designer",
    company: "Freelance",
    startDate: new Date("2021-01-01"),
    endDate: null,
    description:
      "Designed intuitive and user-centered interfaces for web applications, focusing on usability, accessibility, and visual consistency.",
    pin: [
      "Created wireframes, user flows, and high-fidelity UI designs aligned with user needs and business objectives.",
      "Collaborated with developers to ensure accurate implementation of design specifications.",
      "Conducted usability reviews and iterated designs based on feedback and best practices.",
    ],
    location: "Remote",
    skills: ["figma.svg" , "adobe-xd.svg"],
  },
  {role: "Web Application Developer",
    company: "Freelance",
    startDate: new Date("2021-01-01"),
    endDate: null,
    description:
      "Developed and maintained responsive web applications for multiple clients using modern web technologies.",
    pin: [
      "Built responsive and accessible web interfaces using HTML, CSS, and JavaScript.",
      "Implemented dynamic features and client-side logic to improve user experience.",
      "Collaborated directly with clients to translate requirements into functional web solutions.",
    ],
    location: "Remote",
    skills: ["Vue.js", "CSS3", "HTML5", "Git", "Agile"],
  },
   {
    role: "Web Application Developer Intern",
    company: "PT Laskar Teknologi Mulia (Cyberlabs)",
    startDate: new Date("2020-10-01"),
    endDate: new Date("2020-12-01"),
    description:
      "Contributed to the development of web applications during an internship program, focusing on both front-end and back-end implementation.",
    pin: [
      "Implemented front-end interfaces using HTML, CSS, and JavaScript to create interactive and user-friendly pages.",
      "Developed server-side functionality using the Laravel framework to handle data processing and application logic.",
      "Documented development workflows, code structure, and deployment processes to support team collaboration and maintenance.",
    ],
    location: "Remote",
    skills: ["laravel-svgrepo-com.svg", "word.png"],
  },
];

export async function main() {
  console.log("Start seeding...");

  // Clear existing data (optional - be careful in production!)
  await prisma.workExperience.deleteMany();
  await prisma.dashboardSelection.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.education.deleteMany();
  await prisma.gridItems.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.article.deleteMany();
  await prisma.project.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // Seed Users
  for (const u of userData) {
    const user = await prisma.user.create({ data: u });
    console.log(`Created user with id: ${user.id}`);
  }

  // Seed Projects
  for (const p of projectData) {
    const project = await prisma.project.create({ data: p });
    console.log(`Created project with id: ${project.id}`);
  }

  // Seed Articles
  for (const a of articleData) {
    const article = await prisma.article.create({ data: a });
    console.log(`Created article with id: ${article.id}`);
  }

  // Seed GridItems
  for (const g of gridItemsData) {
    const gridItem = await prisma.gridItems.create({ data: g });
    console.log(`Created grid item with id: ${gridItem.id}`);
  }

  // Seed Education
  for (const e of educationData) {
    const education = await prisma.education.create({ data: e });
    console.log(`Created education record with id: ${education.id}`);
  }

  // Seed Certificates
  for (const c of certificateData) {
    const certificate = await prisma.certificate.create({ data: c });
    console.log(`Created certificate with id: ${certificate.id}`);
  }

  // Seed Dashboard Selections
  for (const d of dashboardSelectionData) {
    const selection = await prisma.dashboardSelection.create({ data: d });
    console.log(`Created dashboard selection with id: ${selection.id}`);
  }

  // Seed Work Experiences
  for (const w of workExperienceData) {
    const workExp = await prisma.workExperience.create({ data: w });
    console.log(`Created work experience with id: ${workExp.id}`);
  }

  // Seed Testimonials (needs users and projects to exist)
  const users = await prisma.user.findMany();
  const projects = await prisma.project.findMany();

  if (users.length > 0 && projects.length > 0) {
    const testimonialData: Prisma.TestimonialCreateInput[] = [
      {
        quote: "Excellent work! The project was delivered on time and exceeded our expectations.",
        approved: true,
        user: { connect: { id: users[0].id } },
        project: { connect: { id: projects[0].id } },
      },
      {
        quote: "Professional and skilled developer. Highly recommended!",
        approved: false,
        user: { connect: { id: users[1]?.id || users[0].id } },
        project: { connect: { id: projects[1]?.id || projects[0].id } },
      },
    ];

    for (const t of testimonialData) {
      const testimonial = await prisma.testimonial.create({ data: t });
      console.log(`Created testimonial with id: ${testimonial.id}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });