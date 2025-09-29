import path from "path";
import fs from "fs";
import matter from "gray-matter";

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