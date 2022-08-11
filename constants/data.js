import memojiImage from "../public/assets/images/ericMemoji.png";
import quizzflix from "../public/assets/images/quizzflix.png";
import Ellelashes from "../public/assets/images/ellelashes.jpg";
import Eventify from "../public/assets/images/Eventify.jpg";


const userData = {
  githubUsername: "Ericnsamba",
  name: "Eric ",
  designation: "Product Designer | Developer",
  avatarUrl: "/avatar.png",
  email: "mail@gmail.com",
  phone: "+91 9587738861",
  address: "John doe.",
  projects: [
    {
      title: "Eventify",
      link: "https://eventify.app",
      imgUrl: Eventify,
      category: "Design | UI / UX",
      stack: "Figma",
    },
    {
      title: "LiteKube",
      link: "https://placeholdertech.in",
      imgUrl: memojiImage,
      category: "Co Founder | Developer",
      stack: "Digital Consultancy",
    },
    {
      title: "Ellelashes",
      link: "https://ellelashes.com/",
      imgUrl: Ellelashes,
      category: "Design | Web Development",
      stack: "Wordpress",
    },
    {
      title: "Quizzflix",
      link: "https://apps.apple.com/kg/app/quizzflix/id1553991247",
      imgUrl: quizzflix,
      category: "Design | Develope",
      emoji: "🤯",
      stack: "React Native | Redux | Firebase",
    },
  ],
  about: {
    title: "I'm a software developer",
    description: [
      "I'm a software developer with a passion for building web applications. I have a strong background in web development and have worked on a wide range of projects, from small startups to large enterprises.",
      "I'm a self-taught developer with a strong background in web development. I have worked on a wide range of projects, from small startups to large enterprises.",
    ],
    currentProject: "Tailwind Master Kit",
    currentProjectUrl: "",
  },
  experience: [
    {
      title: "Freelance",
      // company: "Self Employment",
      year: "2022",
      companyLink: "https://algochurn.com",
      desc: "I am currently on a project as a freelancer. I am the lead product designer for a startup call Eventify by Evolutica Pty Ltd.",
    },
    {
      title: "Product designer",
      company: "Kurtosys System",
      year: "2018  2022",
      companyLink: "https://www.kurtosys.com/",
      desc: "At Kurtosys my work entailed, designing finTech products such as fund centers, factsheets and websites that aligned with tools that kurtosys offered. I also worked closely with developers to implement styles. I was initially employed as an Associate Designer and then moved into the role of Designer in the early 2021.",
    },
    {
      title: "Web designer/ developer",
      company: "Lumico",
      year: "2015 2017",
      companyLink: "https://tailwindmasterkit.com",
      desc: "I started as a Junior Web Developer in the Lumico team. I was responsible for creating and maintaining clients’ websites. I focused on front-end development, ensuring that our clients’ websites navigate easily and look presentable. As I grew in my role, I went on to take on the responsibility of a team lead.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
  socialLinks: {
    instagram: "",
    twitter: "",
    linkedin: "",
    github: "",
    facebook: "",
  },
};

export default userData;
