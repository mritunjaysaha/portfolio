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
                padding-top: 4rem;
            `}
        >
            <div>
                <Anchor
                    content="@MritunjaySaha_"
                    link="https://twitter.com/MritunjaySaha_"
                    fontWeight={styles.bold}
                />
            </div>
            <div
                css={css`
                    display: flex;
                    & > a {
                        padding: 0 1rem;
                        &:first-of-type {
                            padding-left: 0;
                            padding-right: 4rem;
                        }
                        &:last-of-type {
                            padding-left: 4rem;
                            padding-right: 0;
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
