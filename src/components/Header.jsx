import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        padding: "20px",
        borderBottom: "1px solid #eee",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px" }}>我的 React 博客</h1>
      <nav>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
        >
          首页
        </Link>
      </nav>
    </header>
  );
}

export default Header;
