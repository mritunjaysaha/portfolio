import React from "react";
import { projects } from "../../src/data/projectInfo";

const Template = (props) => {
    const project = props.project;
    return (
        <li>
            <article>
                <h3>
                    <span>{project.id}.</span> {project.name}
                </h3>
                <br />
                <p>{project.description}</p>
                <br />
                <p>
                    <strong>GitHub:</strong> {project.repo}
                </p>
                <p>
                    <strong>Stack:</strong> {project.stack}
                </p>
                <p>
                    <strong>Demo:</strong>{" "}
                    <a href={project.demo}>{project.demo}</a>
                </p>
                <br />
            </article>
        </li>
    );
};

export default function ProjectList() {
    return (
        <>
            <ol>
                {projects.map((project) => (
                    <Template project={project} />
                ))}
            </ol>
        </>
    );
}
