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
                <section style={{ gridColumn: "1/ span 12" }}>
                    <Footer />
                </section>
            </section>
            <SocialTabs />
        </>
    );
}
