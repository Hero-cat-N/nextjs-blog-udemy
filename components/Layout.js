import Head from "next/head";
import styles from "./layout.module.css"
// note: style.containerとする場合はcssはhogehoge.module.cssとする必要がある

import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Hero-cat's Code";
export const siteTitle = "Next.js blog";

// propsとしてchldrenが渡って来る
function Layout( {children, home} ) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        { home ? (
          <>
          <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          <img src="/images/profile.png" width={100} className={`${utilStyles.borderCircle}`} />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) }
      </header>
      <main>
        {children}
        {/* もしホームのページ以外なら */}
        {!home && (
          <div>
            <Link href="/">←ホームに戻る</Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Layout;