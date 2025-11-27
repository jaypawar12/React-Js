// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Blogify Web App",
        link: "https://github.com/jaypawar12/Blogify-Web-Backend",
        description: "A MERN-based blogging platform with auth, blog CRUD.",
        stack: ["React, Node.js, Express, MongoDB, TypeScript"],
    },
    {
        title: "Admin Panel System",
        link: "https://github.com/jaypawar12/Food-Admin-Panel",
        description: "Full-featured admin dashboard with CRUD, auth & OTP reset.",
        stack: ["Node.js, Express, MongoDB, EJS, Bootstrap 5"],
    },
    {
        title: "Digital Café Website",
        link: "https://github.com/jaypawar12/GrillBar-website/tree/main/grill_bar_caf_website",
        description: "Interactive café menu with filters, cart, and modern UI.",
        stack: ["HTML, CSS, JS, Bootstrap, React"],
    },
    {
        title: "To-Do Management Dashboard",
        link: "https://github.com/jaypawar12/React-Js/tree/master/To-Do-List-App",
        description: "Task app with CRUD, theme switch, and local storage.",
        stack: ["React, Tailwind CSS, TypeScript"],
    },
    {
        title: "CarZone with JSON Server",
        link: "https://github.com/jaypawar12/React-Js/tree/master/CarZone%20With%20Json-Server",
        description: "Responsive car showcase with CRUD, search/filter, and JSON Server backend.",
        stack: ["React ,Tailwind CSS, Framer Motion"],
    },
    {
        title: "Product Management App",
        link: "https://github.com/jaypawar12/Final-Project-Js",
        description: "E-commerce-style product CRUD app using local storage.",
        stack: ["JavaScript, HTML, CSS"],
    },



];

export default function Projects() {
    return (
        <div className="section">
            <div className="section-title">Projects</div>
            <div className="projects-container">
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} inx={idx + 1} {...proj} />
                ))}
            </div>
        </div>
    );
}

