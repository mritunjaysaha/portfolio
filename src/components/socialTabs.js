import React from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export function SocialTabs() {
    return (
        <aside
            css={css`
                position: fixed;
                background: #ff0;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0px;
                left: 0px;
                height: 100vh;
                padding: 0 1rem;
                & > ul {
                    list-style-type: none;
                }
            `}
        >
            <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </aside>
    );
}
