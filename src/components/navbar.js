/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Anchor } from "../atoms/anchor";
import styles from "../atoms/styles";

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
                        padding: 0.5rem 1rem;
                    }
                `}
            >
                <Anchor
                    content="@MritunjaySaha_"
                    link="https://twitter.com/MritunjaySaha_"
                    fontWeight={styles.bold}
                />
            </div>
            <div
                css={css`
                    display: flex;
                    justify-content: space-between;
                    width: 30rem;

                    & > a {
                        padding: 0.5rem 1rem;
                        transition: background 0.4s;
                        border-radius: 6px;

                        &:hover {
                            background: #f00;
                        }
                    }
                `}
            >
                <Anchor content="Projects" link="/projects" />
                <Anchor content="Blogs" link="/blogs" />
                <Anchor content="About" link="/about" />
            </div>
        </nav>
    );
}
