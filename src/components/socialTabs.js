import React from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Link from "next/link";
import { UilLinkedin, UilGithub, UilTwitter } from "@iconscout/react-unicons";

function Anchor(props) {
    return (
        <Link href={props.link || "#"}>
            <a
                css={css`
                    color: ${props.color || "#000"};
                `}
            >
                {props.icon}
            </a>
        </Link>
    );
}

const socialIcons = css`
    height: 3rem;
    width: 3rem;
`;

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
            <ul
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    & > li {
                        margin: 1rem 0;
                    }
                `}
            >
                <li>
                    <Anchor
                        icon={<UilGithub css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li>
                    <Anchor
                        icon={<UilTwitter css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li>
                    <Anchor
                        icon={<UilLinkedin css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li>
                    <Anchor
                        icon={
                            <img
                                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                                alt="Mritunjay Saha's DEV Profile"
                                css={socialIcons}
                            />
                        }
                        link="https://dev.to/mritunjaysaha"
                    />
                </li>
            </ul>
        </aside>
    );
}
