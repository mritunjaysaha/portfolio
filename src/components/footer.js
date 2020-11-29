import React from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";

export function Footer() {
    return (
        <footer
            css={css`
                grid-column: 1 / span 12;
                display: flex;
                justify-content: space-between;
            `}
        >
            <p
                css={css`
                    display: flex;
                `}
            >
                <span
                    css={css`
                        padding-right: 1rem;
                    `}
                >
                    <UilEnvelopeAlt />
                </span>
                mritunjaysaha@outlook.com
            </p>
            <p>Connect with me</p>
        </footer>
    );
}
