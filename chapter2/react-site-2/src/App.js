import RootPage from './RootPage';
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<RootPage />} />
                </Routes>

                <Routes>
                    <Route path="/WelcomePage" element={<WelcomePage />} />
                </Routes>
            </header>
        </div>
    </Router>
  );
}

export default App;
