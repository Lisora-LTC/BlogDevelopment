import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <HashRouter>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Header />
        <main style={{ padding: "20px 0" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
