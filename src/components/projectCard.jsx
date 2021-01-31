/**@jsx jsx*/
import { css, jsx } from "@emotion/core";
import { Anchor } from "../atoms/anchor";
import { style } from "../../styles/style";
import Image from "next/image";

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
                <p
                    css={css`
                        margin: 1rem 0;
                    `}
                >
                    {description ? description : temp}
                </p>
                <p
                    css={css`
                        display: flex;
                        align-items: center;
                        margin-bottom: 1.5rem;
                    `}
                >
                    <strong>Stack:</strong>
                    <span
                        css={css`
                            display: flex;
                            margin-left: 1rem;
                            p {
                                background-color: ${style.color.blue};
                                border: 1px solid ${style.color.blueBorder};
                                padding: 1rem 2rem;
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
                            margin: 0 1rem;
                            padding: 1rem 2rem;
                            border: 1px solid ${style.color.blueBorder};
                            border-radius: 0.5rem;

                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    `}
                >
                    <Anchor content="Github" link={repo} />
                    <Anchor content="Visit" link={demo} />
                </div>
            </div>
        </>
    );
}
