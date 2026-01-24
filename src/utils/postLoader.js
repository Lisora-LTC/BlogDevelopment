// 简单的 FrontMatter 解析器 (无需额外依赖)
function parseFrontMatter(text) {
  // 匹配开头的 --- ... ---
  const pattern = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = text.match(pattern);

  if (!match) return { attributes: {}, body: text };

  const frontMatterBlock = match[1];
  const body = text.replace(pattern, "").trim();

  const attributes = {};
  frontMatterBlock.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      if (key && value) {
        attributes[key] = value;
      }
    }
  });

  return { attributes, body };
}

// 使用 Vite 的 import.meta.glob 读取 posts 目录下所有 .md 文件
// eager: true 表示同步加载，方便直接使用
const modules = import.meta.glob("../posts/*.md", { as: "raw", eager: true });

export const getAllPosts = () => {
  return Object.keys(modules).map((path) => {
    const fileContent = modules[path];
    const { attributes, body } = parseFrontMatter(fileContent);

    // 从文件路径提取文件名作为 ID (slug)
    // 例如: "../posts/my-first-post.md" -> "my-first-post"
    const slug = path.split("/").pop().replace(".md", "");

    return {
      id: slug, // 我们用文件名作为文章的唯一 ID
      ...attributes, // 展开 metadata (title, date)
      content: body, // 正文内容
    };
  });
};
