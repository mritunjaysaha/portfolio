/**@jsx jsx*/
import { jsx, css } from "@emotion/core";
import { ProjectCard } from "../components/projectCard";

export function ProjectArticle({ name, description, repo, demo, stack }) {
    return (
        <>
            <article
                css={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-areas: "img content content";
                    margin-bottom: 4rem;
                `}
            >
                <ProjectCard
                    name={name}
                    description={description}
                    repo={repo}
                    demo={demo}
                    stack={stack}
                />
            </article>
        </>
    );
}
