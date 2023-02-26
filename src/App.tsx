import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Account from './components/account/Account';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path='spotify-form/' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/account' element={<Account />} />
    </Routes>
  </>
);

export default App;
