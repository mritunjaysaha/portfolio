/**@jsx jsx*/
import { css, jsx } from "@emotion/core";
import { Anchor } from "../atoms/anchor";

export function ProjectCard({ name, description, repo, demo, stack }) {
    const temp =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quae voluptates unde dolorum laboriosam, ea a praesentium sed quibusdam neque.";
    return (
        <>
            <div
                css={css`
                    grid-area: img;
                    background: #999;
                    height: 20rem;
                    width: 30rem;
                `}
            ></div>
            <div
                css={css`
                    grid-area: content;
                    padding-left: 4rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                `}
            >
                <h1
                    css={css`
                        font-size: 2.5rem;
                    `}
                >
                    {name ? name : "Project Name"}
                </h1>
                <p>{description ? description : temp}</p>
                <p
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <strong>Stack:</strong>
                    <span
                        css={css`
                            display: flex;
                            margin-left: 1rem;
                            p {
                                background-color: #f00;
                                padding: 0.5rem 1.5rem;
                                margin: 0 1rem;
                                border-radius: 0.5rem;
                            }
                        `}
                    >
                        {stack ? (
                            stack.map((s) => <p>{s}</p>)
                        ) : (
                            <>
                                <p>react</p>
                                <p>react</p>
                                <p>react</p>
                            </>
                        )}
                    </span>
                </p>
                <div
                    css={css`
                        display: flex;
                        a {
                            text-decoration: none;
                            margin-right: 2rem;
                            padding: 0.5rem 1.5rem;
                            border: 2px solid #f00;
                            border-radius: 0.5rem;
                            &:nth-last-child() {
                                margin-right: 0;
                            }
                        }
                    `}
                >
                    {/* <a
                        target="_blank"
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"
                    >
                        GitHub
                    </a>
                    <a href="">View</a> */}

                    <Anchor content="Github" link={repo} />
                    <Anchor content="Visit" link={demo} />
                </div>
            </div>
        </>
    );
}
