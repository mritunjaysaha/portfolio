/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import { Footer } from "../components/footer";

export function FooterSection() {
    return (
        <section
            css={css`
                padding: 4rem 0;
                grid-column: 1 / span 12;
                display: none;
            `}
        >
            <Footer />
        </section>
    );
}
