import React from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export function Footer() {
    return (
        <footer
            css={css`
                grid-column: 1 / span 12;
                display: flex;
                justify-content: space-between;
            `}
        >
            <p>mritunjaysaha@outlook.com</p>
            <p>Connect with me</p>
        </footer>
    );
}
