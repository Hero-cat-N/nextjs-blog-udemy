import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";

import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "@/lib/post";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // note: id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( { allPostsData } ) {
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
              <p>SSGとSSRの使い分けの部分はいつなのか？</p>
            </Link>
            <br />
            <small className={utilStyle.lightText}>September, 27, 2025</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
