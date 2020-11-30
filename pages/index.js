import React from "react";
import { Navbar } from "../src/components/navbar";
import { SocialTabs } from "../src/components/socialTabs";
import { Footer } from "../src/components/footer";

/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Home() {
    return (
        <>
            <section
                css={css`
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    column-gap: 1rem;
                    padding: 0 20rem;
                `}
            >
                <Navbar />
                <section
                    css={css`
                        padding: 20rem 0;
                        grid-column: 1 / span 12;
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
                </section>
                <section
                    css={css`
                        padding: 4rem 0;
                        grid-column: 1 / span 12;
                    `}
                >
                    <Footer />
                </section>
            </section>
            <SocialTabs />
        </>
    );
}
