import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CharacterList from '../pages/CharacterList/characterList';
import CharacterDeitails from '../pages/CharaterDetails/characterDetails';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CharacterList />} />
        <Route exact path='/deitails/:id' element={<CharacterDeitails />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}
