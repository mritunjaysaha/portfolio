/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import {
    UilLinkedinAlt,
    UilGithubAlt,
    UilTwitter,
} from "@iconscout/react-unicons";
import { Anchor } from "../atoms/anchor";
import { style } from "../../styles/style";

const socialIcons = css`
    height: 4rem;
    width: 4rem;
    transition: border 0.3s;
    vertical-align: center;
    text-align: center;
`;

const asideStyle = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
    height: 100vh;
`;

const ulStyle = css`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const liStyle = css`
    margin: 1rem 1.5rem;
    border-radius: 50%;
    border: 2.5px solid transparent;
    padding: 1.2rem 1rem 0.5rem;
    transition: ease-in 0.3s;
    &:hover {
        border: 2.5px solid ${style.color.blueBorder};
    }
`;

export function SocialTabs() {
    return (
        <aside css={asideStyle}>
            <ul css={ulStyle}>
                <li css={liStyle}>
                    <Anchor
                        content={<UilGithubAlt css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li css={liStyle}>
                    <Anchor
                        content={<UilTwitter css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li css={liStyle}>
                    <Anchor
                        content={<UilLinkedinAlt css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li css={liStyle}>
                    <Anchor
                        content={
                            <img
                                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                                alt="DEV Profile"
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
