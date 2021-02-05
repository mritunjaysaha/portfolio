/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Anchor } from "../atoms/anchor";
import { style } from "../../styles/style";

export function Navbar() {
    return (
        <nav
            css={css`
                grid-column: 1 / span 12;
                display: flex;
                justify-content: space-between;
                padding: 4rem 0;

                @media only screen and (max-width: 767px) {
                    display: none;
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
                    display: flex;
                    justify-content: space-between;

                    li {
                        list-style: none;
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
                            border: ${style.border.thickness} solid transparent;
                            font-size: ${style.font.size.small};

                            &:hover {
                                background: ${style.color.blue};
                                border: ${style.border.thickness} solid
                                    ${style.border.color};
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
