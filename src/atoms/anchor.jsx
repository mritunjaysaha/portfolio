/**@jsx jsx */
import { jsx, css } from "@emotion/core";

export function Anchor({ link, fontWeight, content }) {
    return (
        // <Link  passHref={passHref}>
        <a
            target="_blank"
            href={link || "#"}
            css={css`
                color: inherit;
                text-decoration: none;
                font-weight: ${fontWeight || "normal"};
                cursor: pointer;
            `}
        >
            {content}
        </a>
        // </Link>
    );
}
