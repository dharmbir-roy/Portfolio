import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
    IoLogoNodejs,
    IoLogoCss3,
} from "react-icons/io5";


import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const PROFILE_DATA = {
    // porfilePicture: "",
    name: "Dharmbir Roy",
    tagline: "Passionate Frontend Developer, dedicated to crafting immersive web applications and solving complex challenges.",
    jobTitle: "Frontend Developer",
    location: "New Delhi, India",
    yearsOfExperience: "Fresher",
    skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Git", 
        "Tailwind",
        "Redux",
        "Node.js",
    ],
    email: "dharmbirroy.1@gmail.com",
    phone: "+91 7667727351",
    linkdin: "www.linkedin.com/in/dharmbir-roy-0b152a27a",
};

export const SKILLS = [
    {
        id:"01",
        icon: IoLogoJavascript,
        title: "JavaScript",
        comment: "JavaScript is my bread and butter. I've been working with it and have built varius applications, ranging from simple script to complex web application."
    },
    {
        id: "02",
        icon: IoLogoHtml5,
        title: "Html",
        comment: "HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantic, ensuring my applications are well structured and accessible. "
    },
    {
        id: "03",
        icon: IoLogoReact,
        title: "React Js",
        comment: "I'm deeply passionate about React.js and have been using it extensivelf for my projects. I've built varius projects, including my portfolio and interactive web applications."
    },
    {
        id: "04",
        icon: IoLogoNodejs,
        title: "Node Js",
        comment: "Node.js is my go-to choice for buliding scalable and efficient server-side application. With its event-driven architecture and extensive ecosystem, I've built Restfull APIs, real-time chat applications, and more."
    },
    {
        id: "05",
        icon: SiMongodb,
        title: "MongoDB",
        comment: "MongoDB's flexible document-based structure and scalability make it an ideal choice for starting and managing data in modern web applications. I've used MondoDB extensively in projects, ranging from small-scale applications to large-scale platforms."
    },
    {
        id: "06",
        icon: RiTailwindCssFill,
        title: "Tailwind CSS",
        comment: "Tailwind CSS has revolutionized the way I approach front-end styling. Its utility-first approach allows me to rapidly build responsive and beautifuly designed interfaces without writing custon Css."
    },
];

export const PROJECT = [
    {
        id: "01",
        name: "Calculater",
        use: "JavaScript,HTML,CSS",
        date: "Feb 7 2024",
        description: "This fronted project calulater is a web application designed with HTML for structure, CSS for styling, and JavaScript for interactivity. It provides a user-friendly interfacr where users calculates Addition, Subtraction, Multiplication, Division, and Percentage. Implements the interactive functinality of the calculator like: Button clicks listens for user actions, and Tracks the current input (numbers and operations) and the current calculated result, and Updates the calculator display dynamically as the user inputs number and operations, and also Ensures that operations like division by zero or invalid input are handled gracefully.  "
    },
    {
        id: "02",
        name: "QR-Code-Generator",
        use: "JavaScript,HTML,CSS",
        date: "March 7 2024",
        description: "The project involves creating a QR code generator using HTML, CSS, JavaScript and integrating an external API for QR code image generation. HTML is utilized for structuring the webpage, CSS for styling elements to ensure a visually appealing interface, and JavaScript for handling user interactions and logic. The generator allows user to input text or URL,s triggering the generation of corresponding QR code s upon clicking a generation button. The QR code image is dynamically generated using API(QR Code Generator API), which processes the user input and return the QR code image URL."
    },
    {
        id: "03",
        name: "CURD App",
        use: "React",
        date: "April 29 2024",
        description: "This project is a simple CRUD application using React and CSS. Users can add new entries through a form, edit existing entries, and delete entries. The React components manage the state and handle user interactions, while CSS ensures the application is visually appealing and user-friendly. The app provides a practical example of managing dynamic data in a React application with a clean and responsive user interface."
    },
    
];

export const ABOUT_ME_DATA = {
    introduction: "Hi , I'm Dharmbir Roy, a Frontend developer passionate about building engaging web application and solving complex problems with code.",
    background: "I hold a Bachelor's degree in Bachelor of Computer Application from Maharaja Agrasen Himalayan Garhwal University. After completion of bachelor i've gained a certification course of web designing in which i upgrade my skills of frontend development and work on projects.",
    skills: "I'm proficient in a verient of techologies including React.js, JavaScript, HTML, CSS, Node.js , and Tailwind.I've also experienced in using  GitHub and Postman.",
    projects: "Some of my notable projrcts are CURD-App built with React.js, a QR-Code-Genetrator app built with Javascript and HTML/CSS.",
    interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and listening music. I'm also an internet surfer and love exploring new cuisines.",
    careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new techologies, and contributing to meaningful projects that make a positive impact on people's lives.",

    stats: {
        Experience: "Fresher",
        numberofProjects: 4,
        certificationsEarned: 1,
    },
};