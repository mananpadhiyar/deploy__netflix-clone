import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import TheHome from "./components/TheHome";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<TheHome />} />
        <Route path="/browse" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
