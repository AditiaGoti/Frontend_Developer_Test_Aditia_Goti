// src/App.js atau src/Router.js

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './app/pokemon/page';
import NotFoundPage from './app/NotFoundPage';
import Detail from './app/pokemon/[id]/page';
import MainLayout from './layout/Mainlayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/pokemon/:id" element={<Detail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;