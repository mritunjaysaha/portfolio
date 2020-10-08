import Head from "next/head";
import { Navbar } from "../src/components/navbar";
import { SocialTabs } from "../src/components/socialTabs";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
    return (
        <>
            <section className={styles.container}>
                <Navbar />
                <section style={{ gridColumn: "1/ span 12" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    placeat molestiae doloribus alias illo earum at, iusto
                    asperiores omnis animi expedita. Impedit expedita corrupti
                    repellat iste atque, maiores omnis fugit explicabo
                    reprehenderit culpa fugiat illum sapiente vel rem accusamus,
                    est architecto odio similique error cupiditate aut nostrum
                    adipisci assumenda perspiciatis. Vero quidem ab voluptatem
                    optio blanditiis delectus esse nisi temporibus, dolorum quis
                    beatae quaerat officiis voluptatibus ad? Ex ab et minima,
                    voluptates sit saepe rerum, explicabo quos quasi perferendis
                    nobis est! Ipsum doloribus, beatae suscipit nobis ratione
                    ducimus! Eveniet expedita aperiam iste nihil beatae
                    consequatur, enim ut eum sapiente laboriosam, dicta
                    explicabo quasi eaque molestiae quae mollitia accusamus.
                    Cumque officia voluptate non, ipsum sapiente doloremque
                    molestiae odit modi hic expedita ratione blanditiis nostrum
                    cupiditate reiciendis perferendis tempora recusandae eaque
                    error veritatis soluta obcaecati saepe? Voluptatum,
                    consectetur sunt enim tempore laborum non ad repudiandae
                    aut, odit, et facilis dolorem molestias repellat vitae illo
                    distinctio. Incidunt doloremque nobis cumque dicta, quaerat
                    quos quas laudantium numquam, cupiditate id possimus libero
                    excepturi provident, deserunt natus aperiam pariatur
                    consectetur neque. Consequuntur sint ipsa voluptate ad
                    voluptatibus quod ea ratione? Temporibus, exercitationem.
                    Fuga nemo suscipit quia harum, quis nostrum possimus porro
                    tenetur cum ipsa accusantium aperiam. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Ad reiciendis voluptates
                    amet nostrum consequuntur dolorem ducimus itaque. Libero
                    molestias voluptates quibusdam, inventore repudiandae
                    adipisci amet vel ex, ab et soluta aliquam minus vero
                    perspiciatis. Quasi reprehenderit dolore accusantium tempora
                    consectetur non odit molestias accusamus facere. Aliquam
                    omnis dolore perferendis recusandae accusamus! Quidem fugit
                    magni nam beatae officia vitae nihil delectus. Quos labore
                    repellendus quas commodi quae at voluptatem, dolores hic,
                    nam, perferendis pariatur quisquam et facilis doloribus
                    reprehenderit totam! Voluptas, aliquam provident cum quis
                    nisi fugit iusto dolore? Facere beatae hic earum veniam
                    perspiciatis, nisi accusamus harum quidem cumque error
                    quisquam, sapiente quia ratione. Ipsam fugit eligendi amet
                    earum quis cupiditate deleniti totam odit in necessitatibus
                    inventore sapiente reiciendis nobis, ullam minima qui porro
                    quos officia vitae hic! Corporis cumque debitis
                    necessitatibus ex perspiciatis dolor dicta eos fugit magni
                    aspernatur eaque nam assumenda delectus voluptas sunt fuga
                    dolores quisquam, possimus vel. Asperiores aliquam accusamus
                    dolore debitis cumque tempore quam inventore vel nisi,
                    molestias modi obcaecati nobis perferendis at rem voluptate
                    doloremque temporibus aperiam exercitationem in nesciunt
                    magni repudiandae. Nesciunt corrupti saepe voluptatem
                    itaque, ex ratione odit, laborum reprehenderit expedita
                    assumenda error dignissimos nam quos non amet numquam nisi
                    aliquam incidunt.
                </section>
            </section>
            <SocialTabs />
        </>
    );
}
