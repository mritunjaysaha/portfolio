/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Anchor } from "../atoms/anchor";
import { style, mediaQueries } from "../../styles/style";
import { SocialTabs } from "./socialTabs";

export function Navbar() {
    return (
        <nav
            css={css`
                padding: 4rem 0;

                /* Desktop view */
                ${mediaQueries[3]} {
                    grid-column: 1 / span 12;
                    display: flex;
                    justify-content: space-between;
                    padding: 4rem 0;
                }
            `}
        >
            <div
                css={css`
                    & > a {
                        margin: 1rem 1.5rem 1rem 0;
                    }
                `}
            >
                <Anchor
                    content="@MritunjaySaha_"
                    link="https://twitter.com/MritunjaySaha_"
                    fontWeight={style.font.weight.bold}
                />
            </div>
            <ul
                css={css`
                    position: absolute;
                    top: 0;
                    left: 0;

                    background: rgba(0, 0, 0, 0.9);

                    display: flex;
                    flex-direction: column;

                    height: 100vh;
                    width: 100vw;

                    /* padding: 2rem 0 0 2rem; */

                    z-index: 10;

                    li {
                        list-style: none;
                        width: inherit;
                        padding-top: 4rem;
                        padding-left: 4rem;

                        &:first-child {
                            padding-top: 12rem;
                        }

                        a {
                            color: ${style.color.white};
                            font-size: ${style.font.size.medium};
                            font-weight: ${style.font.weight.bold};
                            text-transform: uppercase;
                            letter-spacing: 0.4rem;

                            /* border-bottom: ${style.border.thickness} solid
                                ${style.color.white}; */

                            background-image: linear-gradient(
                                to left,
                                white,
                                white
                            );
                            background-size: 42% ${style.border.thickness};
                            background-repeat: no-repeat;
                            background-position: left bottom;
                        }
                    }
                    ${mediaQueries[3]} {
                        display: flex;
                        justify-content: space-between;

                        li {
                            transition: 0.3s all;
                            padding: 0;
                            margin: 0 2.5rem;

                            &:first-child {
                                margin-left: 0;
                            }

                            &:last-child {
                                margin-right: 0;
                            }

                            a {
                                padding: 1rem 2.5rem;
                                color: ${style.color.black};
                                transition: 0.3s all;
                                border-radius: 0.5rem;
                                border: ${style.border.thickness} solid
                                    transparent;
                                font-size: ${style.font.size.small};

                                &:hover {
                                    background: ${style.color.blue};
                                    border: ${style.border.thickness} solid
                                        ${style.border.color};
                                }
                            }
                        }
                    }
                `}
            >
                <li>
                    <Anchor content="Projects" link="/projects" />
                </li>
                <li>
                    <Anchor content="Blogs" link="/blogs" />
                </li>
                <li>
                    <Anchor content="About" link="/about" />
                </li>
            </ul>
        </nav>
    );
}
