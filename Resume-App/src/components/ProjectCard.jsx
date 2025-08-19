// src/components/ProjectCard.jsx
export default function ProjectCard({ inx, title, link, description, stack, features }) {
    return (
        <div className="project">
            <strong>
                <p>{inx}. <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a></p>
            </strong>
            {description}
            <br />
            <em>Stack:</em> {stack}
            {features && (
                <>
                    <br />
                    <em>Features:</em> {features}
                </>
            )}
        </div>
    );
}
