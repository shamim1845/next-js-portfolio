export const ProjectsConstant = [
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
        <br />
        <div>
          <span className="text-foreground font-semibold">
            Major Challenges :
          </span>{" "}
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
      </div>
    ),
    technology: [
      {
        name: "React Js",
        icon: "/tech-icons/React.svg",
      },
      {
        name: "Redux",
        icon: "/tech-icons/Redux.svg",
      },
      {
        name: "Node Js",
        icon: "/tech-icons/Node.js.svg",
      },
      {
        name: "Express",
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
    ],
    gitHubLinks: {
      frontEnd: "https://github.com/shamim1845/digimart-frontend",
      backEnd: "https://github.com/shamim1845/digimart-backend",
    },
    liveLink: "https://digimart-ecommerce.onrender.com/",
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
      <div>
        <p>
          <span className="text-foreground font-semibold">
            Project Summary :
          </span>{" "}
          This is an application that simplifies the process of building a
          custom PC by allowing users to select their preferred components and
          generate PDFs.
        </p>
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
      </div>
    ),
    technology: [
      {
        name: "Next Js",
        icon: "/tech-icons/Next.js.svg",
      },
      {
        name: "Redux",
        icon: "/tech-icons/Redux.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tech-icons/Tailwind-CSS.svg",
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
      frontEnd: "https://github.com/shamim1845/digimart-frontend",
      backEnd: "https://github.com/shamim1845/digimart-backend",
    },
    liveLink: "https://digimart-ecommerce.onrender.com/",
  },
  {
    name: "Shamim Keep",
    featured: false,
    images: ["/project/early-days/shamim-keep.png"],
    description: (
      <div>
        <p>
          Implemented ordering, cart reviewing and multi filtering products
          feature system for the users, and administration dashboard for the
          admin where admin manage orders and add, delete, update products and
          categories.
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
        icon: "/tech-icons/React.svg",
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
];
