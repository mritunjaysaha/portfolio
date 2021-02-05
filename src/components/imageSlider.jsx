/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faHtml5,
    faSass,
    faReact,
    faJs,
} from "@fortawesome/free-brands-svg-icons";
const Webpack = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        css={css`
            height: 100px;
            width: 100px;
        `}
    >
        <path
            d="M29.54 24.663L16.57 32v-5.713l8.08-4.446zm.888-.803V8.52l-4.744 2.742v9.862zm-27.966.803L15.43 32v-5.713L7.345 21.84zm-.888-.803V8.52l4.744 2.742v9.862zM2.13 7.524L15.43 0v5.522L6.84 10.25zm27.74 0L16.57 0v5.522l8.59 4.723z"
            fill="#8ed6fb"
        />
        <path
            d="M15.43 25.237L7.456 20.85v-8.684l7.974 4.604zm1.14 0l7.975-4.383v-8.69L16.57 16.77zm-.57-8.8zm-8.004-5.275L16 6.763l8.004 4.4L16 15.783z"
            fill="#1c78c0"
        />
    </svg>
);

export function ImageSlider() {
    const sliding = keyframes`100%{transform: translateX(-180px)}`;
    return (
        <div
            css={css`
                width: 60rem;
                overflow-x: hidden;
                display: none;
            `}
        >
            <ul
                css={css`
                    list-style: none;
                    display: flex;
                    animation: ${sliding} 3s linear 2s forwards;
                    & > li {
                        font-size: 12rem;
                        color: #cbd5e1;
                        padding: 2rem;
                    }
                `}
            >
                <li>
                    <FontAwesomeIcon icon={faCss3Alt} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faHtml5} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSass} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faJs} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact} />
                </li>
            </ul>
        </div>
    );
}
