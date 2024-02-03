import React from "react";

export interface ProjectProps {
  name: string;
  featured: boolean;
  images?: string[];
  description: React.ReactNode;
  technology: {
    name: string;
    icon: string;
  }[];
  gitHubLinks: {
    frontEnd?: string;
    backEnd?: string;
    fullStack?: string;
  };
  liveLink?: string;
}

export const ProjectsConstant: ProjectProps[] = [
  {
    name: "Digimart (E-Commerce)",
    featured: true,
    images: [
      "/project/digimart/1.png",
      "/project/digimart/2.png",
      "/project/digimart/3.png",
      "/project/digimart/4.png",
      "/project/digimart/5.png",
      "/project/digimart/6.png",
      "/project/digimart/7.png",
      "/project/digimart/8.png",
      "/project/digimart/9.png",
      "/project/digimart/10.png",
      "/project/digimart/11.png",
      "/project/digimart/12.png",
      "/project/digimart/13.png",
      "/project/digimart/14.png",
      "/project/digimart/15.png",
      "/project/digimart/16.png",
    ],
    description: (
      <>
        <div>
          <p>
            <span className="text-foreground font-semibold">
              Project Summary :
            </span>{" "}
            Digimart is an e-commerce store. With Digimart, users can discover a
            wide range of products, from electronics and fashion to home
            essentials and more. It has user-friendly navigation and secure
            transactions.
          </p>
        </div>
        <br />
        <div>
          <span className="text-foreground font-semibold">
            Major Challenges :
          </span>
          <ul className="list-disc list-inside">
            <li>
              Implementing the user authentication system on both the server and
              the client side.
            </li>
            <li>
              tracking the user activity and proper client-side state
              management.
            </li>
            <li>Integrating Stripe payment gateway for payment processing.</li>
          </ul>
        </div>
        <br />
        <div>
          <span className="text-foreground font-semibold">Technology :</span>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-foreground">Front-End:- </span>
              React.js as the UI library, styled components for styling,
              react-router-dom for client-side routing, Redux for state
              management, Formik for form handling, Yup for validation, and
              Axios for HTTP client.
            </li>
            <li>
              <span className="text-foreground">Back-End:- </span>
              Node.js and Express.js to create REST API, MongoDB for the
              database, JsonWebToken for authentication, and Stripe for payment
              processing.
            </li>
            <li>
              <span className="text-foreground">File Upload:- </span>
              Cloudinary using Cloudinary Node SDK.
            </li>
            <li>
              <span className="text-foreground">Deployment & CI/CD :- </span>
              Render and Github.
            </li>
          </ul>
        </div>
      </>
    ),
    technology: [
      {
        name: "React JS",
        icon: "/tech-icons/React.svg",
      },
      {
        name: "Redux",
        icon: "/tech-icons/Redux.svg",
      },
      {
        name: "Node JS",
        icon: "/tech-icons/Node.js.svg",
      },
      {
        name: "Express JS",
        icon: "/tech-icons/Express.svg",
      },
      {
        name: "MongoDB",
        icon: "/tech-icons/MongoDB.svg",
      },
      {
        name: "Stripe",
        icon: "/tech-icons/Stripe-icon.svg",
      },
      {
        name: "Cloudinary",
        icon: "/tech-icons/Cloudinary.svg",
      },
      {
        name: "Styled Components",
        icon: "/tech-icons/styled-components.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "https://github.com/shamim1845/digimart-frontend",
      backEnd: "https://github.com/shamim1845/digimart-backend",
    },
    liveLink: "https://digimart-ecommerce.onrender.com",
  },
  {
    name: "Flow Jobs",
    featured: true,
    images: [
      "/project/flow-jobs/1.png",
      "/project/flow-jobs/2.png",
      "/project/flow-jobs/3.png",
    ],
    description: (
      <>
        <div>
          <p>
            <span className="text-foreground font-semibold">
              Project Summary :
            </span>{" "}
            Flow Jobs is a job finder application. It is a digital platform
            designed to help individuals search for employment opportunities. It
            is a great place where job seekers can explore various job listings
            using robust search filters, and submit applications. <br /> <br />
            Employers can use the application to post job openings and
            candidates can find this job when an admin approves this job. <br />{" "}
            <br />
            The goal of this job finder application is to facilitate a more
            efficient and effective job search process for both job seekers and
            employers, ultimately helping individuals find suitable employment
            opportunities and companies find qualified candidates.
          </p>
        </div>
        <br />

        <div>
          <span className="text-foreground font-semibold">Technology :</span>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-foreground">Front-End:- </span>
              Next.js is used as a full-stack framework, with Tailwind CSS for
              styling, shadcn/ui as a component library, react-markdown for
              render markdown.
            </li>
            <li>
              <span className="text-foreground">Back-End:- </span>
              Next.js API route for developing Rest API, and Postgres as a
              Database.
            </li>
            <li>
              <span className="text-foreground">File Upload:- </span>
              Vercel/blob
            </li>
            <li>
              <span className="text-foreground">Deployment & CI/CD :- </span>
              Vercel and Github.
            </li>
          </ul>
        </div>
      </>
    ),
    technology: [
      {
        name: "Next JS",
        icon: "/tech-icons/Next.js.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tech-icons/Tailwind-CSS.svg",
      },
      {
        name: "shadcn/ui",
        icon: "/tech-icons/shadcn/ui.svg",
      },
      {
        name: "Prisma",
        icon: "/tech-icons/prisma.svg",
      },
      {
        name: "Clerk",
        icon: "/tech-icons/clerk.svg",
      },
      {
        name: "Vercel",
        icon: "/tech-icons/Vercel.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/NextJS-Job-Board",
    },
    liveLink: "https://next-js-job-board.vercel.app",
  },
  {
    name: "PC Craft (PC Builder)",
    featured: true,
    images: [
      "/project/pc-craft/1.png",
      "/project/pc-craft/2.png",
      "/project/pc-craft/3.png",
    ],
    description: (
      <>
        <div>
          <p>
            <span className="text-foreground font-semibold">
              Project Summary :
            </span>{" "}
            This is an application that simplifies the process of building a
            custom PC by allowing users to select their preferred components and
            generate PDFs.
          </p>
        </div>
        <br />
        <div>
          <span className="text-foreground font-semibold">
            Major Challenges :
          </span>{" "}
          <ul className="list-disc list-inside">
            <li>
              Uploading images and storing them in the Database using the
              Cloudinary Node SDK.
            </li>
            <li>
              Tracking user activity and adding or removing items from
              checklists..
            </li>
            <li>One-click PDFs Creation with user-selected components.</li>
          </ul>
        </div>
        <br />
        <div>
          <span className="text-foreground font-semibold">Technology :</span>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-foreground">Front-End:- </span>
              Next.js is used as a full-stack framework, with Tailwind CSS for
              styling, Redux for state management, and RTK Query for efficient
              data fetching and caching.
            </li>
            <li>
              <span className="text-foreground">Back-End:- </span>
              Next.js API route for Rest API, and MongoDb for Database.
            </li>
            <li>
              <span className="text-foreground">File Upload:- </span>
              Cloudinary using Cloudinary Node SDK.
            </li>
            <li>
              <span className="text-foreground">Deployment & CI/CD :- </span>
              Vercel and Github.
            </li>
          </ul>
        </div>
      </>
    ),
    technology: [
      {
        name: "Next JS",
        icon: "/tech-icons/Next.js.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tech-icons/Tailwind-CSS.svg",
      },
      {
        name: "Redux",
        icon: "/tech-icons/Redux.svg",
      },
      {
        name: "MongoDB",
        icon: "/tech-icons/MongoDB.svg",
      },
      {
        name: "Cloudinary",
        icon: "/tech-icons/Cloudinary.svg",
      },
      {
        name: "Vercel",
        icon: "/tech-icons/Vercel.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/pc-builder",
    },
    liveLink: "https://pc-craft.vercel.app",
  },
  {
    name: "DND Image Gallery",
    featured: false,
    images: ["/project/early-days/image-gallery.png"],
    description: (
      <div>
        <p>
          DND Image Gallery is a robust and feature-rich image gallery project.
          With this platform, users have the power to upload new photos,
          effortlessly rearrange existing ones, choose multiple images at once,
          and swiftly delete them. It&apos;s your one-stop solution for managing
          and showcasing your image collection with ease.
        </p>
      </div>
    ),
    technology: [
      {
        name: "TypeScript",
        icon: "/tech-icons/TypeScript.svg",
      },
      {
        name: "React JS",
        icon: "/tech-icons/React.svg",
      },
      {
        name: "Vite",
        icon: "/tech-icons/Vite.js.svg",
      },
      {
        name: "Styled Components",
        icon: "/tech-icons/styled-components.svg",
      },
      {
        name: "DND/KIT",
        icon: "/tech-icons/dnd-kit.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/ollyo-image-gallery",
    },
    liveLink: "https://ollyo-image-gallery.netlify.app",
  },
  {
    name: "Finity",
    featured: false,
    images: ["/project/early-days/finity.png"],
    description: (
      <div>
        <p>
          Finity is an agency website template built with Next JS, Tailwind CSS,
          and shadcn/ui. It has authentication and authorization features like
          user registration, verification, and log in.
        </p>
      </div>
    ),
    technology: [
      {
        name: "Next JS",
        icon: "/tech-icons/Next.js.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tech-icons/Tailwind-CSS.svg",
      },
      {
        name: "shadcn/ui",
        icon: "/tech-icons/shadcn.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/getup",
    },
    liveLink: "https://getup-shamim.vercel.app",
  },
  {
    name: "Tenzies 2.0",
    featured: false,
    images: ["/project/early-days/tenzies-2.0.png"],
    description: (
      <div>
        <p>
          Tenzies 2.0 is a fun dice game application that offers an engaging
          experience. Roll the dice and keep going until all of them show the
          same number. Simply click on each die to lock it at its current value
          before each roll.
        </p>
      </div>
    ),
    technology: [
      {
        name: "React JS",
        icon: "/tech-icons/React.svg",
      },
      {
        name: "Vite",
        icon: "/tech-icons/Vite.js.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/dice-game",
    },
    liveLink: "https://dice-game-sigma-six.vercel.app",
  },
  {
    name: "Shamim Keep",
    featured: false,
    images: ["/project/early-days/shamim-keep.png"],
    description: (
      <div>
        <p>
          Shamim Keep is a note-taking app developed by me. It allows users to
          create and manage notes. Shamim Keep is designed to be a simple and
          easy-to-use tool for capturing and organizing information. You can
          create text-based notes in Shamim Keep.
        </p>
      </div>
    ),
    technology: [
      {
        name: "HTML",
        icon: "/tech-icons/HTML5.svg",
      },
      {
        name: "CSS",
        icon: "/tech-icons/CSS3.svg",
      },
      {
        name: "JavaScript",
        icon: "/tech-icons/JavaScript.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/shamim-keep",
    },
    liveLink: "https://shamim1845.github.io/shamim-keep/",
  },
  {
    name: "ChatCord",
    featured: false,
    images: ["/project/early-days/chatcord.png"],
    description: (
      <div>
        <p>
          ChatCord is a user-friendly real-time chat application designed for
          seamless communication. With ChatCord, you can easily select your
          preferred chat room, join the conversation, and send messages to
          connect with other users in a dynamic and interactive environment.
        </p>
      </div>
    ),
    technology: [
      {
        name: "HTML",
        icon: "/tech-icons/HTML5.svg",
      },
      {
        name: "CSS",
        icon: "/tech-icons/CSS3.svg",
      },
      {
        name: "JavaScript",
        icon: "/tech-icons/JavaScript.svg",
      },
      {
        name: "Node JS",
        icon: "/tech-icons/Node.js.svg",
      },
      {
        name: "Express Js",
        icon: "/tech-icons/Express.svg",
      },
      {
        name: "Socket.io",
        icon: "/tech-icons/Socket.io.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/chatcord",
    },
    liveLink: "https://chatcord-realtime-chat-app.onrender.com",
  },
  {
    name: "Weather App",
    featured: false,
    images: ["/project/early-days/weather-app.png"],
    description: (
      <div>
        <p>
          This application is a weather-checking tool that empowers you to
          access real-time weather information simply by entering your
          city&apos;s name. Stay informed about the current weather conditions
          in your area with just a few clicks.
        </p>
      </div>
    ),
    technology: [
      {
        name: "HTML",
        icon: "/tech-icons/HTML5.svg",
      },
      {
        name: "CSS",
        icon: "/tech-icons/CSS3.svg",
      },
      {
        name: "JavaScript",
        icon: "/tech-icons/JavaScript.svg",
      },
      {
        name: "Node JS",
        icon: "/tech-icons/Node.js.svg",
      },
      {
        name: "Express Js",
        icon: "/tech-icons/Express.svg",
      },
      {
        name: "Handlebars",
        icon: "/tech-icons/Handlebars.svg",
      },
    ],
    gitHubLinks: {
      frontEnd: "",
      backEnd: "",
      fullStack: "https://github.com/shamim1845/weather-app-with-express.js",
    },
    liveLink: "https://weather-app-sbrk.onrender.com/weather",
  },
];
