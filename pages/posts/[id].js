import Layout from "@/components/Layout";
import { getAllPostIds } from "@/lib/post";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

// note: [id].jsとして任意のURLをつけることができる

export default function Post() {
  return (
    <Layout>
      動的ルーティング設定
    </Layout>
  );
}