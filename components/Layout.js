import Head from "next/head";
import styles from "./layout.module.css"
// note: style.containerとする場合はcssはhogehoge.module.cssとする必要がある

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
        <img src="/images/profile.png" width={160} />
          <h1>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;