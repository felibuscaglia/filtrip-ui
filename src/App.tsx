import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashPage from "screens/SplashPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </Router>
  );
};

export default App;
