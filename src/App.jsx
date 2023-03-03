import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
