/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amaan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Amaan Sheikh Portfolio",
    type: "website",
    url: "https://amaan784.github.io",
  },
};

//Home Page
const greeting = {
  title: "Amaan Sheikh",
  logo_name: "Amaan Sheikh",
  nickname: "amaan784",
  subTitle:
    "Inquisitive about Tech and Data to unleash it and make a difference!",
  resumeLink:
    "https://drive.google.com/file/d/1b8XLxrE2E0SWsGSwD4ZX4aHGif-e4yzj/view?usp=sharing",

  portfolio_repository: "https://github.com/amaan784/amaan784.github.io/",
  githubProfile: "https://github.com/amaan784/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/amaan784/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amaansheikh21/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:amaan784@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Experience with building frameworks for forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing cross platform applications using React Native",
        "⚡ Creating application backend in Node, Express & Fastapi",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ExpressJS-NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Fastapi",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud",
        "⚡ Migrating and Engineering big data from EDL to CDL",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            color: "#FF3621",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: {
            color: "#4581C3",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  // others to maybe consider: CodeChef, Codeforces, Hackerearth
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/amaan784",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/amaan784",
    },
    {
      siteName: "Devpost",
      iconifyClassname: "simple-icons:devpost",
      style: {
        color: "#003E54",
      },
      profileLink: "https://devpost.com/amaan784",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Columbia University",
      subtitle: "M.S. in Computer Science - Machine Learning",
      logo_path: "Columbia_logo.png",
      alt_name: "Columbia University",
      duration: "2025 - Present",
      descriptions: ["⚡ Machine Learning Specialization"],
      website_link: "https://www.columbia.edu/",
    },
    {
      title: "University of California, Santa Cruz",
      subtitle: "B.S. in Computer Science",
      logo_path: "uc_seal_hd.png",
      alt_name: "University of California, Santa Cruz",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have taken a variety of courses related to Software Engineering, Artificial Intelligence, Systems",
        "⚡ I was a tutor and a grader for CSE 101: Data Structures and Algorithms and grader for CSE 183: Web Applications",
        "⚡ Honors: Undergraduate Dean’s Scholarship, Dean’s Honors (4 times), Honors in the Major",
      ],
      website_link: "https://www.ucsc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    /*
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    */
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and MNCs as a Data Science Intern and in Data and Software Engineering roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full Time and Part Time Jobs",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Kenvue",
          company_url: "https://www.kenvue.com/",
          logo_path: "kenvue_standalone.jpeg",
          duration: "Oct 2023 - Aug 2025",
          location: "Skillman, NJ, USA",
          description: "Part of the Supply Chain Technology and Data team",
          color: "#000000",
        },
        {
          title: "Academic Tutor and Grader",
          company: "UCSC Baskin School of Engineering",
          company_url: "https://engineering.ucsc.edu/",
          logo_path: "ucsc_baskin_engineering.png",
          duration: "Feb 2023 - Jun 2023",
          location: "Santa Cruz, CA, USA",
          description:
            "Academic Tutor and Grader for CSE 101: Data Structures and Algorithms and CSE 183: Web Applications",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Cloud Brigade",
          company_url: "https://www.cloudbrigade.com/",
          logo_path: "cloud_brigade.svg",
          duration: "July 2022 - Aug 2022",
          location: "Santa Cruz, USA",
          description: "Part time Intern",
          color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "BlokTrek",
          company_url: "https://privateblok.ai/home",
          logo_path: "bloktrek_logo.jpeg",
          duration: "Jun 2022 - Sept 2022",
          location: "Princeton, USA",
          description:
            "One of the first interns / employees of the new Blockchain Intelligence and Finance Copilot Startup called PrivateBlok (BlokTrek)",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "CLOUDSUFI",
          company_url: "https://www.cloudsufi.com/",
          logo_path: "cloudsufi_logo.jpg",
          duration: "Jun 2021 - Sept 2021",
          location: "Remote",
          description: "Part of the Data Science Team.",
          color: "#ee3c26",
        },
        {
          title: "Intern",
          company: "KPMG India",
          company_url: "https://kpmg.com/in/en/home.html",
          logo_path: "kpmg_logo.jpeg",
          duration: "Sep 2020 - Oct 2020",
          location: "Mumbai, India",
          description:
            "Part of the Advanced Analytics team in ITA Lighthouse, at KPMG India.",
          color: "#ee3c26",
        },
        {
          title: "Intern",
          company: "Johnson & Johnson India",
          company_url: "https://www.jnj.com/",
          logo_path: "jnj_logo_hd.png",
          duration: "May 2019 - Aug 2019",
          location: "Mumbai, India",
          description:
            "Part of the Global Make Analytics Function in the Consumer Supply Chain Analytics team",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Freelance and Volunteerships",
      experiences: [
        {
          title: "Developer",
          company: "Handshake.fyi",
          company_url: "https://handshake.fyi/",
          logo_path: "handshake_fyi_logo.png",
          duration: "2024",
          location: "NJ / CA",
          description:
            "Developed a full-stack Generative AI chatbot for Handshake.fyi, implementing text-to-SQL conversion to query a large dataset owned by the San Francisco Municipal Transportation Agency (SFMTA). Optimized the chatbot’s performance by providing contextual data, enabling accurate query execution and improving data retrieval efficiency",
          color: "#D83B01",
        },
        {
          title: "Volunteering Intern",
          company: "iDream Education",
          company_url: "https://www.idreameducation.org/",
          logo_path: "idream_logo.jpeg",
          duration: "Feb 2017 - April 2017",
          location: "Mumbai, India",
          description:
            "Worked with Content Development Team to aggregate most suitable local language learning apps for underprivileged children in Rural India.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "smile_bitmoji.png",
    description: "Feel free to reach out if you have any questions.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
