import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    Unity,
    tailwind,
    nodejs,
    git,
    Pro,
    blender,
    KV,
    Hobbies,
    arvr,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "3D artist",
      icon: web,
    },
    {
      title: "2D animator",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Unity",
      icon: Unity,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Pro",
      icon: Pro,
    },
    {
      name: "blender",
      icon: blender,
    },
  ];
  
  const experiences = [
    {
      title: "School",
      company_name: "Kendriya Vidyalaya",
      icon: KV,
      iconBg: "#383E56",
      date: "april 2010 - june 2022",
      points: [
        "KV no. 1, Delhi Cantt. (2010-2011)",
        "KV Sulur, Coimbatore. (2011-2014)",
        "Participated and won many drawing competitions.",
        "KV no. 1 Adampur, Punjab. (2014 - 2019)",
        "Secured 1st rank in Inter-district Drawing & Painting competition.",
        "Kv Borjhar, Guwahati. (2019 - 2022)",
      ],
    },
    {
      title: "Hobbies",
      company_name: "Pastime activties",
      icon: Hobbies,
      iconBg: "#E6DEDD",
      date: "2004 - Present",
      points: [
        "Doing and making art & crafty things.",
        "Cycling and playing chess.",
        "Reading and learning about new interesting stuffs.",
        "Watching series or movies.",
      ],
    },
    {
      title: "Field of Interest",
      company_name: "AR/VR developer",
      icon: arvr,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Crafting immersive, visually rich experiences that push the boundaries of creativity using AR and VR technologies.",
        "Incorporating the fundamentals of various kind of animation including 2D and 3D.",
        "Developing applications with a strong artistic foundation.",
        "Integrating storytelling and visual art to create deeply immersive and personalized user experiences.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "A very sincere student at St Joseph's University and her performance at the college was really excellent. ",
      name: "Sudheendhra SG",
      designation: "Technical Director",
      company: "Sathvick Infotech",
      image: "./Testimonial/Sudheendra.jpg",
    },

    {
      testimonial:
        "i worked with progya in a project and she was great help, she is excellent in her part. she does her work within the given time and even help other members with their part too",
      name: "Priyanshi Lakra",
      designation: "Student",
      company: "St Joseph University",
      image: "./Testimonial/priyanshi.jpg",
    },

    
  ];
  
  const projects = [
    {
      name: "Blinking Game",
      description:
        "Simple and fun blinking game developed using Meta Spark Studio.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Meta",
          color: "green-text-gradient",
        },
        {
          name: "Spark Studio",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Peng-999/peng-blink.git",
    },
    {
      name: "Solar System Application",
      description:
        "Solar system developed using Unity as a training module for children",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Solar system",
          color: "green-text-gradient",
        },
        {
          name: "Interactive",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Peng-999/solar-system-repository.git",
    },
    {
      name: "Obstacle Game",
      description:
        "A simple obstacle game built using all the programming concepts of c sharp.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Game",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };