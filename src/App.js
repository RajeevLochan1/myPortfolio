import "./App.css";
import Contact from "./components/WelcomePage/Contact/Contact";
import Project from "./components/WelcomePage/Projects/Project";
import { Resume } from "./components/WelcomePage/Resume/Resume";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;