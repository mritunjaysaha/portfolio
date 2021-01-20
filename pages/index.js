import React from "react";
import { Navbar } from "../src/components/navbar";
import { SocialTabs } from "../src/components/socialTabs";
import { Footer } from "../src/components/footer";
import { ImageSlider } from "../src/components/imageSlider";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Home() {
    const IntroSection = () => (
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

    const FooterSection = () => (
        <section
            css={css`
                padding: 4rem 0;
                grid-column: 1 / span 12;
            `}
        >
            <Footer />
        </section>
    );

    return (
        <>
            <section
                // grid layout of entire page
                css={css`
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    column-gap: 1rem;
                    padding: 0 20rem;
                `}
            >
                <Navbar />
                <IntroSection />
                {/* Project Section */}
                <section
                    css={css`
                        grid-column: 1 / span 12;
                    `}
                >
                    <article>
                        <div></div>
                        <div>
                            <h1>Project Name</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia architecto ab dolorem
                                accusamus illo repellendus non officiis ratione
                                omnis reprehenderit?
                            </p>
                            <p>
                                Stack:{" "}
                                <span>
                                    <p>react</p>
                                </span>
                            </p>
                            <div>
                                <a href="">GitHub</a>
                                <a href="">View</a>
                            </div>
                        </div>
                    </article>
                </section>
                <FooterSection />
            </section>
            <SocialTabs />
        </>
    );
}
