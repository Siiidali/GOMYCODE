import Home from "./components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddBlog from "./components/AddBlog/AddBlog";
import BlogDetaills from "./components/BlogDeatills/BlogDetaills";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/:id" element={<BlogDetaills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
