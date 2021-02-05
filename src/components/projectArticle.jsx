/**@jsx jsx*/
import { jsx, css } from "@emotion/core";
import { ProjectCard } from "../components/projectCard";
import { mediaQueries } from "../../styles/style";
export function ProjectArticle({ name, description, repo, demo, stack, gif }) {
    return (
        <>
            <article
                css={css`
                    display: flex;
                    flex-direction: column;
                    margin: 2rem 0;
                    ${mediaQueries[3]} {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-areas: "img content content";
                        margin: 8rem 0;
                    }
                `}
            >
                <ProjectCard
                    name={name}
                    description={description}
                    repo={repo}
                    demo={demo}
                    stack={stack}
                    gif={gif}
                />
            </article>
        </>
    );
}
