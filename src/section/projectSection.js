/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { projects } from "../data/projectInfo";
import { Anchor } from "../atoms/anchor";
import { ProjectArticle } from "../components/projectArticle";

export function ProjectSection() {
    return (
        <>
            <section
                css={css`
                    grid-column: 1 / span 12;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        font-size: 4rem;
                        margin-bottom: 4rem;
                    `}
                >
                    Projects
                </h1>
                {projects.map(
                    ({ display, name, description, repo, demo, stack }) => {
                        if (display) {
                            return (
                                <ProjectArticle
                                    name={name}
                                    description={description}
                                    repo={repo}
                                    demo={demo}
                                    stack={stack}
                                />
                            );
                        }
                    }
                )}
            </section>
        </>
    );
}
