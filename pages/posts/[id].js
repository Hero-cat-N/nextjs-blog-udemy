import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "@/styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

// note: getPostData を async にしてるのに await をつけ忘れてる

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData, // ← コンポーネントに渡される
    },
  };
}

// note: [id].jsとして任意のURLをつけることができる

export default function Post( {postData} ) {
  return (
    <Layout>
      <h1 className={utilStyles.headingX1}>{postData.title}</h1>
      <div className={utilStyles.lightText}>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
    </Layout>
  );
}