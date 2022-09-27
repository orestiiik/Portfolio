import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="projects" element={<ProjectsPage/>}/>
                <Route path="/:slug" element={<ProjectPage/>}/>
                <Route path="aboutme" element={<AboutPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </main>
    );
}

export default App;
