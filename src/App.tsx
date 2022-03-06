import LoginInputs from './components/LoginInputs';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowInfos } from './components/ShowInfos';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ShowInfos />}></Route>
          <Route path="/login"></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
