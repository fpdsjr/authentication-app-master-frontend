import LoginInputs from './components/Login';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowInfos } from './components/ShowInfos';
import { Home } from './components/Home';
import UserInfos from './components/UserInfos';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ShowInfos>
                <UserInfos />
              </ShowInfos>
            }></Route>
          <Route path="/login" element={<LoginInputs />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
