import React from "react";
import Link from "next/link";
import styles from "../../styles/pages/Home.module.scss";

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <p>@Mritunjay_Saha_</p>
            </div>
            <div className={styles.links}>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/blogs">
                    <a>Blogs</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <a href="">Contacts</a>
            </div>
        </nav>
    );
}
