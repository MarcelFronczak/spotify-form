import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Account from './components/account/Account';
import { AuthContextProvider } from "./context/AuthContext";

const App: React.FC = () => (
  <>
    <AuthContextProvider>
      <Routes>
        <Route path='/spotify-form' element={<Registration />} />
        <Route path='/spotify-form/login' element={<Login />} />
        <Route path='/spotify-form/account' element={<Account />} />
      </Routes>
    </AuthContextProvider>
  </>
);

export default App;
