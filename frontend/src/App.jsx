import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ShowItem from './pages/ShowItem';
import EditItem from './pages/EditItem';
import DeleteItem from './pages/DeleteItem';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store/create' element={<CreateItem />} />
      <Route path='/store/details/:id' element={<ShowItem />} />
      <Route path='/store/edit/:id' element={<EditItem />} />
      <Route path='/store/delete/:id' element={<DeleteItem />} />
    </Routes>
  );
};

export default App;
