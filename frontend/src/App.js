import "./App.css";
import { Route, HashRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Projects from "./components/projects/ProjectsHome";
import Blog from "./components/blog/BlogHome"

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;

