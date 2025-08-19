// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Digital Café Website",
        link: "https://github.com/jaypawar12/GrillBar-website/tree/main/grill_bar_caf_website",
        description: "Responsive menu UI with category filters and cart.",
        stack: "HTML, CSS, JS, Bootstrap, React"
    },
    {
        title: "Admin Panel System",
        link: "https://github.com/jaypawar12/Food-Admin-Panel",
        description: "Admin dashboard with CRUD, authentication, OTP reset.",
        stack: "Node.js, Express, MongoDB, EJS"
    },
    {
        title: "Product Management App",
        link: "https://github.com/jaypawar12/Final-Project-Js",
        description: "App to manage product CRUD and cart using local storage.",
        stack: "JavaScript, HTML, CSS",
        features: "Integrated with e-commerce API for product data."
    }
];

export default function Projects() {
    return (
        <div className="section">
            <div className="section-title">Projects</div>
            {projects.map((proj, idx) => (
                <ProjectCard key={idx} inx={idx + 1} {...proj} />
            ))}
        </div>
    );
}
