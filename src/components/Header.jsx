import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        /* 布局设置 */
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        /* 尺寸与间距 */
        padding: "20px 40px" /* 上下20px, 左右40px，让头部宽敞一点 */,
        marginBottom: "40px",

        /* 视觉风格：清爽蓝 */
        /* 使用透明背景，配合底部的细线条 */
        borderBottom: "2px solid var(--accent-light)",
        color: "var(--primary)",

        /* 简单的毛玻璃效果 (可选，增加了现代感) */
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(247, 251, 252, 0.8)", // --bg-main 的半透明版
      }}
    >
      {/* 左侧：Logo / 博客名称 */}
      <div
        style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "1px" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          My Blog
        </Link>
      </div>

      {/* 右侧：导航链接 */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "var(--text-main)", // 导航项平时用深灰色
            fontWeight: "500",
            transition: "color 0.3s", // 加个平滑过渡
          }}
          // 为了演示简单的悬停变色，这里使用了内联样式的小技巧
          // 实际项目中通常使用 CSS 类
          onMouseOver={(e) => (e.target.style.color = "var(--primary)")}
          onMouseOut={(e) => (e.target.style.color = "var(--text-main)")}
        >
          首页
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "var(--text-main)",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "var(--primary)")}
          onMouseOut={(e) => (e.target.style.color = "var(--text-main)")}
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}

export default Header;
