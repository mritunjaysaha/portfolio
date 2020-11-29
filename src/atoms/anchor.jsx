/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

export function Anchor(props) {
    return (
        <Link href={props.link || "#"}>
            <a
                css={css`
                    color: ${props.color || "#000"};
                `}
            >
                {props.content}
            </a>
        </Link>
    );
}
