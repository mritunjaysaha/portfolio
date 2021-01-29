/**@jsx jsx */
import { jsx, css } from "@emotion/core";

export function Anchor({ link, color, fontWeight, content, passHref }) {
    return (
        // <Link  passHref={passHref}>
        <a
            target="_blank"
            href={link || "#"}
            css={css`
                text-decoration: none;
                color: ${color || "#000"};
                font-weight: ${fontWeight || "normal"};
                cursor: pointer;
            `}
        >
            {content}
        </a>
        // </Link>
    );
}
