/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import { Navbar } from "../src/components/navbar";
import { SocialTabs } from "../src/components/socialTabs";
import { ProjectSection } from "../src/section/projectSection";
import { FooterSection } from "../src/section/footerSection";
import { IntroSection } from "../src/section/introSection";
import { mediaQueries } from "../styles/style";

export default function Home() {
    return (
        <>
            <section
                // grid layout of entire page
                css={css`
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    column-gap: 1rem;
                    padding: 0 20rem;

                    ${mediaQueries[0]} {
                    }
                `}
            >
                <Navbar />
                <IntroSection />
                <ProjectSection />
                <FooterSection />
            </section>
            <SocialTabs />
        </>
    );
}
