import React from "react";
import Link from "next/link";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { AnchorTag } from "../components/utils/utils";

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
                <Link href="#">
                    <AnchorTag>@Mritunjay_Saha_</AnchorTag>
                </Link>
            </div>
            <div
                css={css`
                    display: flex;
                    & > a {
                        padding: 0 1rem;
                        &:first-child {
                            padding-left: 0;
                        }
                        &:last-child {
                            padding-right: 0;
                        }
                    }
                `}
            >
                <Link href="/projects">
                    <AnchorTag>Projects</AnchorTag>
                </Link>
                <Link href="/blogs">
                    <AnchorTag>Blogs</AnchorTag>
                </Link>
                <Link href="/about">
                    <AnchorTag>About</AnchorTag>
                </Link>
                <AnchorTag>Contacts</AnchorTag>
            </div>
        </nav>
    );
}
