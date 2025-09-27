import Head from "next/head";
import styles from "./layout.module.css"
// note: style.containerとする場合はcssはhogehoge.module.cssとする必要がある

import utilStyles from "../styles/utils.module.css"

const name = "Hero-cat's Code";
export const siteTitle = "Next.js blog";

// propsとしてchldrenが渡って来る
function Layout( {children} ) {


  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" width={160} className={utilStyles.borderCircle} />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;