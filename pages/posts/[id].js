import Layout from "@/components/Layout";
import { getAllPostIds, getPostsData } from "@/lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const posts = getPostsData(params.getAllPostIds);
  console.log(posts);
  return {
    props: {
      posts, // ← コンポーネントに渡される
    },
  };
}

// note: [id].jsとして任意のURLをつけることができる

export default function Post() {
  return (
    <Layout>
      動的ルーティング設定
    </Layout>
  );
}