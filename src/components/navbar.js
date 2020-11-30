import React from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Anchor } from "../atoms/anchor";

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
                />
            </div>
            <div
                css={css`
                    display: flex;
                    & > a {
                        padding: 0 1rem;
                        &:first-of-type {
                            padding-left: 0;
                        }
                        &:last-of-type {
                            padding-right: 0;
                        }
                    }
                `}
            >
                <Anchor content="Projects" link="/projects" />
                <Anchor content="Blogs" link="/blogs" />
                <Anchor content="About" link="/about" />
                <Anchor content="Contacts" />
            </div>
        </nav>
    );
}
