import Intro from './components/into';
import MainComponent from './components/mainComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

