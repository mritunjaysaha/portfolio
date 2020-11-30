/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { UilLinkedin, UilGithub, UilTwitter } from "@iconscout/react-unicons";
import { Anchor } from "../atoms/anchor";

const socialIcons = css`
    height: 3rem;
    width: 3rem;
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: border 0.8s;
    transition-delay: 0.4s;

    &:hover {
        border: 2px solid #f00;
    }
`;

const asideStyle = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
    height: 100vh;
    padding: 0 2rem;
    & > ul {
        list-style-type: none;
    }
`;

const ulStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > li {
        margin: 1rem 0;
    }
`;

export function SocialTabs() {
    return (
        <aside css={asideStyle}>
            <ul css={ulStyle}>
                <li>
                    <Anchor
                        content={<UilGithub css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li>
                    <Anchor
                        content={<UilTwitter css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li>
                    <Anchor
                        content={<UilLinkedin css={socialIcons} />}
                        link="https://github.com/mritunjaysaha"
                    />
                </li>
                <li>
                    <Anchor
                        content={
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
