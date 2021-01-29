/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import { ImageSlider } from "../components/imageSlider";

export function IntroSection() {
    return (
        <section
            css={css`
                padding: 20rem 0;
                grid-column: 1 / span 12;
                display: flex;
                justify-content: space-between;
            `}
        >
            <header>
                <h1
                    css={css`
                        font-size: 5rem;
                        padding-bottom: 4rem;
                    `}
                >
                    Hey, I'm{" "}
                    <span
                        css={css`
                            opacity: 0.7;
                            text-decoration: underline;
                        `}
                    >
                        Mritunjay
                    </span>
                </h1>
                <p
                    css={css`
                        font-size: 2.5rem;
                    `}
                >
                    Aspiring Front-end developer
                    <br />3<sup>rd</sup> year CSE at NERIST
                </p>
            </header>
            <ImageSlider />
        </section>
    );
}
