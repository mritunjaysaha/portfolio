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
                            border: 1px solid transparent;
                            font-size: ${style.font.size.small};

                            &:hover {
                                background: ${style.color.onHoverColor};
                                border: 1px solid
                                    ${style.color.onHoverBorderColor};
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
