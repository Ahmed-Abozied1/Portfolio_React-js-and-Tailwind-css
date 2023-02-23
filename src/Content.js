// import images
import Hero_person from "./assets/images/Hero/hero.jpg";

import figma from "./assets/images/Skills/figma.png";
import json from "./assets/images/Skills/json3.png";
import ps from "./assets/images/Skills/ps.png";
import firebase from "./assets/images/Skills/firebase2.png";
import Android from "./assets/images/Skills/android2.png";
import kotlin from "./assets/images/Skills/kotlin-logo.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import project1 from "./assets/images/Services/img1.png";
import project2 from "./assets/images/Services/img2.png";
import project3 from "./assets/images/Services/img3.png";
// import person_project from "./assets/images/Services/person.png";
import person_project from "./assets/images/Services/projects.jpg";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Android Developer",
    firstName: "Ahmed",
    LastName: " Alamin",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Android development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: " user-friendly interface, and scalability",
        logo: figma,
      },
      {
        name: "Android Fundamentals",
        para: "including user interface design, activities, intents, and debugging",
        logo: Android,
      },
      {
        name: "Adobe Photoshop",
        para: "manipulate and enhance digital images",
        logo: ps,
      },
      {
        name: "Firebase ",
        para: "range of tools and services for developing mobile and web applications. ",
        logo: firebase,
      },
      {
        name: "JSON",
        para: "lightweight data interchange format used for exchanging data between applications",
        logo: json,
      },
      {
        name: "Kotlin",
        para: " cross-platform, statically-typed programming language",
        logo: kotlin,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Anroid Development",
        para: " process of building mobile applications for devices that run on the Android operating system. It involves using programming languages such as Java or Kotlin, along with Android SDK (Software Development Kit) tools, to create apps that can be installed on Android devices.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "UI/UX, or user interface/user experience, is the design and development of digital interfaces that are visually appealing, easy to use, and provide a seamless user experience. It encompasses both the visual design of a product, such as its layout.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Photoshop offers a wide range of features, including image cropping, resizing, retouching, color correction, and filter effects. PhotoShop editing can be used to improve the quality of images, remove blemishes, adjust brightness and contrast, and enhance the overall look and feel of images.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Engahmedegypto@gmail.com ",
        icon: GrMail,
        link: "mailto:Engahmedegypto@gmail.com ",
      },
      {
        text: "+201143756046",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "github",
        icon: BsGithub,
        link: "https://github.com/AhmedAlamin"
        
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
