import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginPage setName={setName} />} />
        <Route path="/" element={<LoginPage setName={setName} />} />
        <Route path="/main" element={<MainPage name={name} />} />
      </Routes>
    </div>
  );
}

export default App;
