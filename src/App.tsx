import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/containers/notFound/notFound';
import { Home } from './components/containers/home';
import { Detail } from './components/containers/detail';
import { Admin } from './components/containers/admin';
import { ErrorHandle } from './components/containers/errorHandle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/errorHandle" element={<ErrorHandle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
