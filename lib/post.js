import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// note:mdファイルのデータを取り出す
export function getPostsData() {
  // note: fileNamesは配列として持っている
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "") // note:ファイル名(id)を抽出

    // note: マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // note: idとデータを返す
    return { 
      id,
      ...matterResult.data,
    };
  });
  return allPostData;
}

// getStaticPathでreturnで使うpathを取得する
// postsディレクトリから全てのファイル名を取る
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    });
}

// idに基づいてブログ投稿データを返すための関数
// id から1件だけ取る
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    matterResult.content;
    
    const blogContent = await remark()
    .use(html)
    .process(matterResult.content);
    
    const blogContentHTML = blogContent.toString()
    
    return {
      id,
      blogContentHTML,
      ...matterResult.data,
    }
}