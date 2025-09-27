import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";

import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はフロントエンドエンジニアを目指しています</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              SSGとSSRの使い分けの部分はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>September, 27, 2025</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              SSGとSSRの使い分けの部分はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>September, 27, 2025</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              SSGとSSRの使い分けの部分はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>September, 27, 2025</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              SSGとSSRの使い分けの部分はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>September, 27, 2025</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
